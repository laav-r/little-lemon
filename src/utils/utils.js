const getAvailableTimes = (date) => {
  let results = [];

  for (let i = 11; i <= 21; i += 2) {
    if (date.getDay() === 6 || date.getDay() === 0) {
      results.push(`${i - 1}:00`);
    } else {
      results.push(`${i}:00`);
    }
  }
  return results;
};

const submitFormData = (formData) => {
  if (!true) {
    console.log(formData);
  }
  return true;
};

export { getAvailableTimes, submitFormData };
