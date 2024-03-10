import { Button } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

interface NavBarLinksOwnerProps {
  toggleMenu: () => void;
}

const NavBarLinksOwner: FC<NavBarLinksOwnerProps> = ({ toggleMenu }) => {
  return (
    <>
      <Link to="/owner" onClick={toggleMenu} className="text-center">
        <Button
          variant="text"
          sx={{
            color: "black",
            "&:hover": {
              color: "primary.dark",
            },
            width: "100%",
          }}
        >
          Home
        </Button>
      </Link>
      <Link
        to="/owner/property/post"
        onClick={toggleMenu}
        className="text-center"
      >
        <Button
          variant="text"
          sx={{
            color: "black",
            "&:hover": {
              color: "primary.dark",
            },
            width: "100%",
          }}
        >
          Post Property
        </Button>
      </Link>
      <Link
        to="/owner/contacts/all"
        onClick={toggleMenu}
        className="text-center"
      >
        <Button
          variant="text"
          sx={{
            color: "black",
            "&:hover": {
              color: "primary.dark",
            },
            width: "100%",
          }}
        >
          Contacts
        </Button>
      </Link>
      <Link to="/owner/rentDetail" onClick={toggleMenu} className="text-center">
        <Button
          variant="text"
          sx={{
            color: "black",
            "&:hover": {
              color: "primary.dark",
            },
            width: "100%",
          }}
        >
          Rent
        </Button>
      </Link>
      <Link to="/owner/chat" onClick={toggleMenu} className="text-center">
        <Button
          variant="text"
          sx={{
            color: "black",
            "&:hover": {
              color: "primary.dark",
            },
            width: "100%",
          }}
        >
          Chat
        </Button>
      </Link>
    </>
  );
};

const NavBarLinksTenant: FC<NavBarLinksOwnerProps> = ({ toggleMenu }) => {
  return (
    <>
      <Link to="/tenant" onClick={toggleMenu} className="text-center">
        <Button
          variant="text"
          sx={{
            color: "black",
            "&:hover": {
              color: "primary.dark",
            },
            width: "100%",
          }}
        >
          Home
        </Button>
      </Link>
      <Link
        to="/tenant/rental-properties/all"
        onClick={toggleMenu}
        className="text-center"
      >
        <Button
          variant="text"
          sx={{
            color: "black",
            "&:hover": {
              color: "primary.dark",
            },
            width: "100%",
          }}
        >
          Rental Properties
        </Button>
      </Link>
      <Link
        to="/tenant/real-estate/saved/all"
        onClick={toggleMenu}
        className="text-center"
      >
        <Button
          variant="text"
          sx={{
            color: "black",
            "&:hover": {
              color: "primary.dark",
            },
            width: "100%",
          }}
        >
          Saved
        </Button>
      </Link>
      <Link
        to="/tenant/contacts/all"
        onClick={toggleMenu}
        className="text-center"
      >
        <Button
          variant="text"
          sx={{
            color: "black",
            "&:hover": {
              color: "primary.dark",
            },
            width: "100%",
          }}
        >
          Contacts
        </Button>
      </Link>
      <Link to="/tenant/chat" onClick={toggleMenu} className="text-center">
        <Button
          variant="text"
          sx={{
            color: "black",
            "&:hover": {
              color: "primary.dark",
            },
            width: "100%",
          }}
        >
          Chat
        </Button>
      </Link>
    </>
  );
};

export { NavBarLinksOwner, NavBarLinksTenant };
