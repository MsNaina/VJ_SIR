import "./AdminTestCreate.css";
import Navbar from "../../Mentorship/Navbar";
import { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import config from "../../config";

export default function AdminTestCreate() {
  const [fileName, setFileName] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const zipFileInput = document.getElementById('zipFile');
    const fileNameDisplay = document.getElementById('fileName');
    const testForm = document.getElementById('testForm');
    const statusDisplay = document.getElementById('status');

    zipFileInput.addEventListener('change', function () {
      const fileName = zipFileInput.files[0] ? zipFileInput.files[0].name : '';
      setFileName(fileName);
    });

    testForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const file = zipFileInput.files[0];
      const contentType = document.getElementById('contentType').value;
      const name = document.getElementById('name').value;
      const duration = document.getElementById('duration').value;
      const seriesId = document.getElementById('seriesId').value;

      if (!file) {
        setStatus('No file selected!');
        return;
      }

      const formData = new FormData();
      formData.append('zip', file);
      formData.append('contentType', contentType);
      formData.append('name', name);
      formData.append('duration', duration);
      formData.append('series_id', seriesId);

      const token = localStorage.getItem('access_token'); 
      axios.post(`${config.BASE_URL}/api/upload/test/`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          const data = response.data;
          setStatus('Test created successfully!');
          console.log(data);
        })
        .catch((error) => {
          setStatus(`Failed to upload file! ${error.response.data.detail}`);
          console.error('Error:', error.response.data);
        });
    });
  }, []);

  const [seriesOptions, setSeriesOptions] = useState([]);

  useEffect(() => {
    axios.get(`${config.BASE_URL}/api/mocktest/series/`)
      .then(response => {
        setSeriesOptions(response.data.data);
        console.log('Series options:', response.data);
      })
      .catch(error => {
        console.error('Error fetching series options:', error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 style={{fontSize:24, paddingBottom:'24px'}}>Upload TEST File</h1>

        <form id="testForm" encType="multipart/form-data">
          <input
            type="text"
            className="input"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <input
            type="text"
            className="input"
            id="duration"
            name="duration"
            placeholder="Duration (in minutes)"
            required
          />

          <select id="seriesId" name="seriesId" required>
            <option value="">Select Series ID</option>
            {seriesOptions.map(option => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>

          <input type="file" id="zipFile" accept=".zip" />

          <select id="contentType" name="contentType">
            <option value="mocktest">Mock Test</option>
          </select>

          <button type="submit" className="create-btn">Upload ZIP</button>
        </form>

        <div id="status">{status}</div>
      </div>
    </>
  );
}
