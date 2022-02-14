
import * as React from 'react';
import { hot } from "react-hot-loader/root";
import Button from '@material-ui/core/Button';

interface Props {
   name:
    string
}

class App extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1 className="text-4xl text-white bg-black">
          Hello {name}
        </h1>
        <Button variant="contained">this is a material UI button</Button>
      </>
    );
  }
}

export default hot(App);
