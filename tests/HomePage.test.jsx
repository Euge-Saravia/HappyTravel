import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "../src/context/auth/authContext";
import HomePage from "../src/components/views/HomePage";

const queryClient = new QueryClient();

describe("HomePage Tests", () => {
  const renderWithRouter = (travels = []) => {
    render(
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <MemoryRouter initialEntries={["/"]}>
            <HomePage travels={travels} />
          </MemoryRouter>
        </QueryClientProvider>
      </AuthProvider>
    );
  };

  it("should not display any travels if none are passed", () => {
    renderWithRouter([]);

    const travelElements = screen.queryAllByTestId("travel-card");
    expect(travelElements.length).toBe(0);
  });

  it("should render travels correctly when travels data is provided", () => {
    const mockTravels = [
      {
        id: "1",
        title: "Travel 1",
        location: "Location 1",
        image: "/path/to/image1.jpg",
        userById: "user1",
      },
      {
        id: "2",
        title: "Travel 2",
        location: "Location 2",
        image: "/path/to/image2.jpg",
        userById: "user2",
      },
    ];

    renderWithRouter(mockTravels);

    expect(screen.getByText("Travel 1")).toBeInTheDocument();
    expect(screen.getByText("Location 1")).toBeInTheDocument();
    expect(screen.getByText("Travel 2")).toBeInTheDocument();
    expect(screen.getByText("Location 2")).toBeInTheDocument();
  });
});
