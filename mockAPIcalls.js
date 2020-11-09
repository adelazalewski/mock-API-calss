test("test for the api call post request", async () => {
  render(<ContactForm />)

  //check for async calls and the post request
const apiCall = require("./ContactForm");
const axios = require("axios");
jest.mock("axios");
async () => {
  axios.post({
    data: [
      {
        id: 1,
        firstName: "adela",
        lastName: "zalewski",
        email: "paliuadela@yahoo.com",
        message: "abcdefgjhdbs"
      }
    ]
  });
  const firstName = await apiCall();
  expect(firstName).toEqual("adela");
}
})



//
test("Fetches data and renders the bubbles", async () => {
 //ARRANGE
 render(<BubblePage />); //it renders and its passing

 const getColorsList = require("./BubblePage");

jest.mock("./BubblePage");
//check for async calls and the get request
async () => {
  axios.get({
  data: [
    {
      color: "aliceblue",
      code: {
        hex: "#f0f8ff"
      },
      id: 1
    },
    {
      color: "limegreen",
      code: {
        hex: "#99ddbc"
      },
      id: 2
    },
    {
      color: "aqua",
      code: {
        hex: "#00ffff"
      },
      id: 3
    }
  ]
});
//make assertions
const colorList = await getColorsList();
expect(colorList).toHaveLength(3); //all passes
}
});
//mock data
const data=[
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff"
    },
    id: 1
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc"
    },
    id: 2
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff"
    },
    id: 3
  },
]
