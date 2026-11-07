import { useContext } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import { ProfileProvider, profileContext } from "./context/ProfileContext";
jest.mock("axios", () => {
  const api = {
    get: jest.fn(),
    post: jest.fn(),
    patch: jest.fn(),
    delete: jest.fn(),
  };
  api.create = () => api;
  return { __esModule: true, default: api };
});
beforeEach(() => {
  jest.clearAllMocks();
  Object.defineProperty(navigator, "locks", {
    configurable: true,
    value: { request: (_, operation) => operation() },
  });
});
function ProfilesHarness() {
  const { profiles, removeProfile } = useContext(profileContext);
  return (
    <ul>
      {profiles.map((profile) => (
        <li key={profile._id}>
          {profile.login}
          <button onClick={() => removeProfile(profile._id).catch(() => {})}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}
test("failed removal leaves the saved profile visible and reports the error", async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        _id: "583231",
        login: "octocat",
        avatar_url: "https://avatars.githubusercontent.com/u/583231",
      },
    ],
  });
  axios.delete.mockRejectedValue(new Error("offline"));
  render(
    <ProfileProvider>
      <ProfilesHarness />
    </ProfileProvider>,
  );
  expect(await screen.findByText("octocat")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Remove" }));
  expect(await screen.findByRole("alert")).toHaveTextContent(
    "Could not remove",
  );
  expect(screen.getByText("octocat")).toBeInTheDocument();
});
