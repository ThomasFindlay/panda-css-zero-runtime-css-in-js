import "./App.css";
import { css } from "../styled-system/css";
import Button from "./components/Button";
import { vstack } from "../styled-system/patterns";

function App() {
  return (
    <>
      <div
        className={css({
          minH: "100vh",
          bg: "blue.100",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <div
          className={`group ${css({
            w: {
              base: 200,
              sm: 300,
              md: 400,
              lg: 500,
            },
            h: {
              base: 200,
              sm: 300,
              md: 400,
              lg: 500,
            },
            bg: {
              base: "blue.200",
              _hover: "blue.800",
              md: "orange.200",
              lg: "red.200",
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            rounded: "3xl",
            p: "10px 15px",
            gap: "2rem",
          })}`}
        >
          <h1
            className={css({
              fontSize: {
                base: "lg",
                sm: "xl",
                md: "2xl",
                lg: "3xl",
              },
              fontWeight: "bold",
              color: {
                base: "blue.800",
                _groupHover: "blue.200",
                md: "orange.800",
                lg: "red.800",
              },
            })}
          >
            Hello Panda CSS
          </h1>

          <div className={vstack()}>
            <Button>Default Variants</Button>
            <Button variant="primary" size="md">
              Primary
            </Button>
            <Button variant="success" size="lg">
              Success
            </Button>
            <Button variant="danger" size="sm">
              Danger
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
