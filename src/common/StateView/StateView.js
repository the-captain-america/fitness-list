import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  background: #262335;
  padding: 6px 6px 6px 0px;
  max-height: calc(100% - 79px);
`;

const PreWrapper = styled.div`
  overflow: auto;
  background: #262335;
  height: 100%;
  pre {
    border-radius: 6px;
  }
  &::-webkit-scrollbar-track {
    background: none;
    border: none;
    box-shadow: none;
    border-radius: 4px;
    width: 14px;
  }
  &::-webkit-scrollbar-thumb {
    background: #4b4561;
    border: none;
    box-shadow: none;
    border-radius: 6px;
  }
`;

const Pre = styled.pre`
  outline: none;
  padding: 8px;
  margin: 0px;
  color: white;
  margin-top: 16px;

  span {
    font-size: 14px;
    line-height: 21px;
    &.string {
      color: #ff8b39;
    }
    &.number {
      color: darkorange;
    }
    &.boolean {
      color: #f97e72;
    }
    &.null {
      color: #f97e72;
    }
    &.key {
      color: #2ee2fa;
    }
  }
`;

const syntaxHighlight = (json) => {
  json = json
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    function (match) {
      var cls = 'number';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'key';
        } else {
          cls = 'string';
        }
      } else if (/true|false/.test(match)) {
        cls = 'boolean';
      } else if (/null/.test(match)) {
        cls = 'null';
      }
      return '<span class="' + cls + '">' + match + '</span>';
    }
  );
};

const StateView = ({ state = {} }) => {
  const [html, setHtml] = useState(null);

  useEffect(() => {
    setHtml(syntaxHighlight(JSON.stringify(state, undefined, 4)));
  }, [html, state]);

  const createMarkup = () => {
    return {
      __html: html,
    };
  };

  const renderMarkup = () => {
    if (!html) return null;
    return <Pre dangerouslySetInnerHTML={createMarkup()} />;
  };

  return (
    <Container>
      <PreWrapper>{renderMarkup()}</PreWrapper>
    </Container>
  );
};

export { StateView };
