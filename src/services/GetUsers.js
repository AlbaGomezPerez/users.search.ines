const url = "/UsersList.json";
/**
 * Get list from the json
 * @return a promise will return a json
 */
const GetUsers = () => {
  return fetch(url).then(response => response.json());
};

export { GetUsers };
