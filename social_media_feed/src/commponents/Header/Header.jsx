import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Form, useSearchParams } from "react-router-dom";
import classes from "./index.module.css";
const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [searchQuery, setSearchQuery] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    setSearchParams({ search: `${searchQuery}` });
  }
  return (
    <div className={classes.header}>
      <Form onSubmit={handleSubmit}>
      <TextField id="outlined-basic" variant="outlined" type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} />
      <Button className={classes.button} variant="outlined" type="submit" value="Search">Search</Button>
      </Form>
    </div>
  );
};
export default Header;
