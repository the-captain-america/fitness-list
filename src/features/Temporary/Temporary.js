import React, { useState } from 'react';
import styled from 'styled-components';

import monday from './data/monday.json';
import tuesday from './data/tuesday.json';
import wednesday from './data/wednesday.json';
import thursday from './data/thursday.json';
import friday from './data/friday.json';

import { Checklist } from './Checklist';
import { Select } from '@common/Select';
import { ThemeProvider } from '@common/Theme';
import { format } from 'date-fns';

const CelebrateButton = styled.button`
  width: 100%;
  background: green;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 16px;
  text-align: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  margin-top: 32px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #5fc65f;
  }
  span {
    color: white;
    font-size: 16px;
  }
`;

const Container = styled.div`
  padding: 23px;
  padding-bottom: 64px;
  h2 {
    color: white;
  }
  h1 {
    color: white;
  }
`;

const checklistConfig = {
  preventNavigation: true,
  hideIndicator: true,
  hideControls: true,
  theme: 'primary',
};

const dayOptions = [
  { label: 'monday', value: 'monday', index: 0 },
  { label: 'tuesday', value: 'tuesday', index: 1 },
  { label: 'Wednesday', value: 'Wednesday', index: 2 },
  { label: 'Thursday', value: 'Thursday', index: 3 },
  { label: 'Friday', value: 'Friday', index: 4 },
  { label: 'Saturday', value: 'Saturday', index: 5 },
  { label: 'Sunday', value: 'Sunday', index: 6 },
];

const getItems = (day) =>
  ({
    monday: monday,
    tuesday: tuesday,
    wednesday: wednesday,
    thursday: thursday,
    friday: friday,
  }[day && day.toLowerCase()]);

const Temporary = ({ showCelebrate }) => {
  const [state, setState] = useState({
    celebrateNow: false,
    day: format(new Date(new Date()), 'EEEE'),
  });

  const onCelebrate = () => {
    setState((state) => ({
      ...state,
      celebrateNow: !state.celebrateNow,
    }));
  };

  const handleSelect = ({ name, value }) =>
    setState((state) => ({
      ...state,
      [name]: value,
    }));

  const renderItems = () => {
    if (!state.day || state.day === 'Select') return [];
    console.log(state.day);
    const result = getItems(state.day);
    const items = result && Object.values(result);
    console.log({ items });
    return items.map((item, index) => {
      return (
        <>
          <Checklist
            key={index}
            config={checklistConfig}
            data={item.children}
            title={item.label}
          />
        </>
      );
    });
  };
  // yes separate by found items, no let me adjust those found categories
  return (
    <ThemeProvider>
      <Container>
        <h1>Workout</h1>

        <Select
          label="Day of the week"
          name="day"
          mt={16}
          callback={handleSelect}
          options={dayOptions}
          value={state.day}
        />

        {renderItems()}

        {showCelebrate && (
          <CelebrateButton onClick={onCelebrate}>
            <span>{state.celebrateNow ? 'Reset' : 'Finished'}</span>
          </CelebrateButton>
        )}
      </Container>
    </ThemeProvider>
  );
};

export { Temporary };
