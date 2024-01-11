import { Button, Container, Heading, Text } from "@chakra-ui/react";
import { Illustration } from "variables/constants";

export default function NotFound() {
  return (
    <Container className={"root"}>
      <Heading className={"title"}>Nothing to see here</Heading>
      <br />
      <br />
      <div className={"inner"}>
        <Illustration className={"image"} />
        <div className={"content"}>
          <br />
          <br />
          <Text c="dimmed" size="lg" ta="center" className={"description"}>
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <br />
          <Button
            type="primary"
            size="lg"
            className={"button"}
            onClick={() => (window.location.href = "/")}
          >
            Take me back to home page
          </Button>
          <br />
          <br />
          <br />
        </div>
      </div>
    </Container>
  );
}
