import React, { Component } from 'react';
import styled from 'styled-components';

import Card from './Source';

const Wrapper = styled.div``;

class Usage extends Component {
  render() {
    return (
      <Wrapper>
        {/* --- Place Usage Code Below --- */}
        {/* <LeftyLoosy /> */}
        <Card
          size="300px"
          speed="350ms"
          title="Moose"
          subtitle="Wazanova"
          body="Will you be heard? Do you have a voice? Do you feel heard right now?"
          // frontImg="https://images.unsplash.com/photo-1539470138620-515ac36ac716?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5194f3b58ce8e288b7230990f2008fa7&auto=format&fit=crop&w=934&q=80"
          // backImg="https://images.unsplash.com/photo-1509624776920-0fac24a9dfda?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42ec196ddd2f51e9dbb7bfe0adcbaa3b&auto=format&fit=crop&w=1950&q=80"
        />
      </Wrapper>
    );
  }
}

export default Usage;
