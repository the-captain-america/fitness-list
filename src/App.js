import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@common/Theme';
import { Temporary } from '@features/Temporary';

const checklistConfig = {
  preventNavigation: true,
  hideIndicator: true,
  hideControls: true,
  theme: 'primary',
};

const categories = {
  chest: {
    label: 'chest',
    children: ['incline-a', 'incline-b', 'incline-c'],
  },
  back: {
    label: 'back',
    children: ['chestPress-a', 'chestPress-b', 'chestPress-c'],
  },
  shoulders: {
    label: 'shoulders',
    children: ['shoulder-a', 'shoulder-b', 'shoulder-c'],
  },
  abs: {
    label: 'abs',
    children: ['abd-b', 'abd-c', 'abd-d'],
  },
  cardio: {
    label: 'cardio',
    children: ['run-a'],
  },
  biceps: {
    label: 'biceps',
    children: ['bicep-a', 'bicep-b', 'bicep-c'],
  },
  chinups: {
    label: 'chinups',
    children: [
      'chinup-a',
      'chinup-b',
      'chinup-c',
      'chinup-d',
      'chinup-e',
      'chinup-f',
      'chinup-g',
      'chinup-h',
      'chinup-i',
      'chinup-j',
    ],
  },
};

const items = [
  {
    id: 'incline-a',
    label: 'Incline Chest Press (x12)',
    value: '12 Reps',
    sequence: 1,
    active: false,
  },
  {
    id: 'incline-b',
    label: 'Incline Chest Press (x12)',
    value: '12 Reps',
    sequence: 2,
    active: false,
  },
  {
    id: 'incline-c',
    label: 'Incline Chest Press (x12)',
    value: '12 Reps',
    sequence: 3,
    active: false,
  },
  {
    id: 'chestPress-a',
    label: 'Chest Press (x12)',
    value: '12 Reps',
    sequence: 0,
    active: false,
  },
  {
    id: 'chestPress-b',
    label: 'Chest Press (x12)',
    value: '12 Reps',
    sequence: 1,
    active: false,
  },
  {
    id: 'chestPress-c',
    label: 'Chest Press (x12)',
    value: '12 Reps',
    sequence: 2,
    active: false,
  },
  {
    id: 'shoulder-a',
    label: 'Shoulder Press - Barbell (x12)',
    value: '12 Reps',
    sequence: 1,
    active: false,
  },
  {
    id: 'shoulder-b',
    label: 'Shoulder Press - Barbell (x12)',
    value: '12 Reps',
    sequence: 2,
    active: false,
  },
  {
    id: 'shoulder-c',
    label: 'Shoulder Press - Barbell (x12)',
    value: '12 Reps',
    sequence: 3,
    active: false,
  },
  {
    id: 'leg-a',
    label: 'Hanging Leg Raisers (x15)',
    value: '12 Reps',
    sequence: 1,
    active: false,
  },
  {
    id: 'leg-b',
    label: 'Hanging Leg Raisers (x15)',
    value: '12 Reps',
    sequence: 2,
    active: false,
  },
  {
    id: 'leg-c',
    label: 'Hanging Leg Raisers (x15)',
    value: '12 Reps',
    sequence: 3,
    active: false,
  },
  {
    id: 'abd-b',
    label: 'abdominal Crunches (x25)',
    value: '12 Reps',
    sequence: 1,
    active: false,
  },
  {
    id: 'abd-c',
    label: 'abdominal Crunches (x25)',
    value: '12 Reps',
    sequence: 2,
    active: false,
  },
  {
    id: 'abd-d',
    label: 'abdominal Crunches (x25)',
    value: '12 Reps',
    sequence: 3,
    active: false,
  },
  {
    id: 'run-a',
    label: 'Sprint / Jog 2 kilometers',
    value: '1 Rep',
    sequence: 0,
    active: false,
  },
  {
    id: 'bicep-a',
    label: 'Bicep Curls (x12)',
    value: '12 Reps',
    sequence: 0,
    active: false,
  },
  {
    id: 'bicep-b',
    label: 'Bicep Curls (x12)',
    value: '12 Reps',
    sequence: 1,
    active: false,
  },
  {
    id: 'bicep-c',
    label: 'Bicep Curls (x12)',
    value: '12 Reps',
    sequence: 2,
    active: false,
  },

  {
    id: 'chinup-a',
    label: 'Chin ups (x10)',
    value: '10 Reps',
    sequence: 0,
    active: false,
  },
  {
    id: 'chinup-b',
    label: 'Chin ups (x10)',
    value: '10 Reps',
    sequence: 1,
    active: false,
  },
  {
    id: 'chinup-c',
    label: 'Chin ups (x10)',
    value: '10 Reps',
    sequence: 2,
    active: false,
  },
  {
    id: 'chinup-d',
    label: 'Chin ups (x10)',
    value: '10 Reps',
    sequence: 3,
    active: false,
  },
  {
    id: 'chinup-e',
    label: 'Chin ups (x10)',
    value: '10 Reps',
    sequence: 4,
    active: false,
  },
  {
    id: 'chinup-f',
    label: 'Chin ups (x10)',
    value: '10 Reps',
    sequence: 5,
    active: false,
  },
  {
    id: 'chinup-g',
    label: 'Chin ups (x10)',
    value: '10 Reps',
    sequence: 6,
    active: false,
  },
  {
    id: 'chinup-h',
    label: 'Chin ups (x10)',
    value: '10 Reps',
    sequence: 7,
    active: false,
  },
  {
    id: 'chinup-i',
    label: 'Chin ups (x10)',
    value: '10 Reps',
    sequence: 8,
    active: false,
  },
  {
    id: 'chinup-j',
    label: 'Chin ups (x10)',
    value: '10 Reps',
    sequence: 9,
    active: false,
  },
];

{
  /* <h2>Incline Chest Press</h2>
<Checklist
  data={inclineChestPress}
  config={checklistConfig}
/>
<h2>Chin Ups</h2>
<Checklist data={chinUps} config={checklistConfig} />
<h2>Bicep Curls</h2>
<Checklist data={bicepCurls} config={checklistConfig} />
<h2>Shoulder Press</h2>
<Checklist data={shoulderPress} config={checklistConfig} />
<h2>Hanging Leg Raisers</h2>
<Checklist data={legRaisers} config={checklistConfig} />
<h2>Abs / Crunches</h2>
<Checklist data={abCrunches} config={checklistConfig} />
<h2>Walk / Jog</h2>
<Checklist data={walkJog} config={checklistConfig} /> */
}

// const getIncludedIds = (children) => {};

// const renderChecklist = (items) => {
//   if (!items || !items.length) return null;
//   return items.map((category) => {
//     console.log(category);
//     return (
//       <div>
//         <h2>{category.label}</h2>
//       </div>
//     );
//   });
// };

const App = () => (
  <ThemeProvider>
    <Router>
      <Routes>
        <Route exact path="/" element={<Temporary />}></Route>
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;
