const getPlanetsStarWars = async () => {
  try {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default getPlanetsStarWars;
