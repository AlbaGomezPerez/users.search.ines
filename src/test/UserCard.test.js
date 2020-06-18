import React from "react";
import { render } from "@testing-library/react";
import UserCard from "./../components/UserCard";
import { BrowserRouter } from "react-router-dom";

/**
 * Check UserCard is rendered and the content
 * Create an object (users) to simulate allUsers data
 * Create an object (match) to simulate an id
 * Check error message is rendered
 */
const users = [
  {
    name: "Alba",
    email: "albagope@gmail.com",
    website: "alba.com",
    id: 22,
    company: {
      name: "AlbaCompany"
    },
    phone: 78349853489
  },
  {
    name: "AlbaG",
    email: "albagope22@gmail.com",
    website: "alba22.com",
    id: 92,
    company: {
      name: "GoCompany"
    },
    phone: 783474353489
  },
  {
    name: "AlbaP",
    email: "albagopeP@gmail.com",
    website: "albaP.com",
    id: 19,
    company: {
      name: "PerezCompany"
    },
    phone: 78784383
  }
];

test("UserCard component render user card", () => {
  const match = {
    params: {
      id: "22"
    }
  };
  const { container } = render(
    <BrowserRouter>
      <UserCard allUsers={users} Match={match} />
    </BrowserRouter>
  );
  const card = container.querySelector(".card-container");
  expect(card).not.toBe(null);

  const userName = container.querySelector(".name-card");
  expect(userName.textContent).toBe("Alba");

  const userInfoContainer = container.querySelectorAll(".card-content p");

  expect(userInfoContainer[0].textContent).toBe("albagope@gmail.com");
  expect(userInfoContainer[1].textContent).toBe("alba.com");
  expect(userInfoContainer[2].textContent).toBe("AlbaCompany");
  expect(userInfoContainer[3].textContent).toBe("78349853489");

  const backButton = container.querySelector(".btn");
  expect(backButton).not.toBe(null);
  expect(backButton.parentElement.href).toBe("https://z8isz.csb.app/");
});

test("UserCard render a error message", () => {
  const match = {
    params: {
      id: "13"
    }
  };
  const { container } = render(
    <BrowserRouter>
      <UserCard allUsers={users} Match={match} />
    </BrowserRouter>
  );

  const card = container.querySelector("p");
  expect(card.textContent).toBe("User not found");
});
