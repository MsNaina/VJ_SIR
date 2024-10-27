export const saveDataToLocalStorage = (data) => {
    localStorage.setItem('testData', JSON.stringify(data));
};

