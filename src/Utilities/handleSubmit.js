function handleSubmit(e, getQuerry, querry, setData, setError, setLoading) {
  e.preventDefault();
  getQuerry(querry, setData, setError, setLoading);
}

export default handleSubmit;
