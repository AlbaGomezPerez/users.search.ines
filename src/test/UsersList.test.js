import React from "react";
import { render } from "@testing-library/react";
import UserList from "./../components/UsersList";
import { BrowserRouter } from "react-router-dom";

/**
 * Check UserList is rendered and the content
 * Create an object (users) to simulate allUsers data
 * Create a const (inputValue) to simulate searchUser
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
    website: "albaP.org",
    id: 19,
    company: {
      name: "PerezCompany"
    },
    phone: 78784383
  }
];

test("UserList component render content", () => {
  const inputValue = "";
  const { container } = render(
    <BrowserRouter>
      <UserList allUsers={users} searchUser={inputValue} />
    </BrowserRouter>
  );
  const table = container.querySelector(".striped");
  expect(table).not.toBe(null);

  const head = container.querySelectorAll("th");
  expect(head).not.toBe(null);

  const list = container.querySelectorAll(".userRow");
  expect(list).toHaveLength(3);

  const rowUsers = container.querySelectorAll("tbody tr");
  users.forEach((user, index) => {
    const row = rowUsers[index].querySelectorAll("td");
    expect(row[0].textContent).toBe(user.name);
    expect(row[1].textContent).toBe(user.email);
    expect(row[2].textContent).toBe(user.website);
    expect(row[3].textContent).toBe("+");
    expect(row[3].firstChild.href).toBe(
      "https://z8isz.csb.app/user/" + user.id
    );
  });
});

test("UserList render users filtered by name", () => {
  const inputValue = "aP";
  const { container } = render(
    <BrowserRouter>
      <UserList allUsers={users} searchUser={inputValue} />
    </BrowserRouter>
  );

  const firstUser = container.querySelectorAll("td");
  expect(firstUser[0].textContent).toBe("AlbaP");
  expect(firstUser[1].textContent).toBe("albagopeP@gmail.com");
  expect(firstUser[2].textContent).toBe("albaP.org");

  const list = container.querySelectorAll(".userRow");
  expect(list).toHaveLength(1);
});

test("UserList render users filtered by name and uppercase", () => {
  const inputValue = "ALBA";
  const { container } = render(
    <BrowserRouter>
      <UserList allUsers={users} searchUser={inputValue} />
    </BrowserRouter>
  );

  const firstUser = container.querySelectorAll("td");
  expect(firstUser[0].textContent).toBe("Alba");
  expect(firstUser[1].textContent).toBe("albagope@gmail.com");
  expect(firstUser[2].textContent).toBe("alba.com");

  const list = container.querySelectorAll(".userRow");
  expect(list).toHaveLength(3);
});

test("UserList render users filtered by email", () => {
  const inputValue = "22@";
  const { container } = render(
    <BrowserRouter>
      <UserList allUsers={users} searchUser={inputValue} />
    </BrowserRouter>
  );

  const firstUser = container.querySelectorAll("td");
  expect(firstUser[0].textContent).toBe("AlbaG");
  expect(firstUser[1].textContent).toBe("albagope22@gmail.com");
  expect(firstUser[2].textContent).toBe("alba22.com");

  const list = container.querySelectorAll(".userRow");
  expect(list).toHaveLength(1);
});

test("UserList render users filtered by email uppercase", () => {
  const inputValue = "GMAIL";
  const { container } = render(
    <BrowserRouter>
      <UserList allUsers={users} searchUser={inputValue} />
    </BrowserRouter>
  );

  const list = container.querySelectorAll(".userRow");
  expect(list).toHaveLength(3);

  const rowUsers = container.querySelectorAll("tbody tr");
  users.forEach((user, index) => {
    const row = rowUsers[index].querySelectorAll("td");
    expect(row[0].textContent).toBe(user.name);
    expect(row[1].textContent).toBe(user.email);
    expect(row[2].textContent).toBe(user.website);
    expect(row[3].textContent).toBe("+");
    expect(row[3].firstChild.href).toBe(
      "https://z8isz.csb.app/user/" + user.id
    );
  });
});

test("UserList render users filtered by website", () => {
  const inputValue = "a.";
  const { container } = render(
    <BrowserRouter>
      <UserList allUsers={users} searchUser={inputValue} />
    </BrowserRouter>
  );

  const firstUser = container.querySelectorAll("td");
  expect(firstUser[0].textContent).toBe("Alba");
  expect(firstUser[1].textContent).toBe("albagope@gmail.com");
  expect(firstUser[2].textContent).toBe("alba.com");

  const list = container.querySelectorAll(".userRow");
  expect(list).toHaveLength(1);
});

test("UserList render users filtered by website and uppercase", () => {
  const inputValue = ".OR";
  const { container } = render(
    <BrowserRouter>
      <UserList allUsers={users} searchUser={inputValue} />
    </BrowserRouter>
  );

  const firstUser = container.querySelectorAll("td");
  expect(firstUser[0].textContent).toBe("AlbaP");
  expect(firstUser[1].textContent).toBe("albagopeP@gmail.com");
  expect(firstUser[2].textContent).toBe("albaP.org");

  const list = container.querySelectorAll(".userRow");
  expect(list).toHaveLength(1);
});

test("UserList render an error", () => {
  const inputValue = "Juan";
  const { container } = render(
    <BrowserRouter>
      <UserList allUsers={users} searchUser={inputValue} />
    </BrowserRouter>
  );

  const errorMessage = container.querySelector(".error");
  expect(errorMessage.textContent).toBe("There are not users");
});
