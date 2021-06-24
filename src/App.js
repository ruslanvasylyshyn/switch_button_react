import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import yotpo from './yotpo.png';

import './App.scss';

Toggle.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
};

export default function Toggle(props) {
  const toggle = useRef();
  const checkbox = useRef();

  function handleToggle() {
    if (props.onChange) {
      props.onChange();
    }

    toggle.current.classList.toggle('toggled');
    toggle.current.classList.toggle('toggle-switch-active');
    checkbox.current.checked = !checkbox.current.checked;
  }

  return (
    <div className="card">
      <img src={yotpo} alt="yotpo" className="card__img" />
      <span className="card__text">yotpo</span>
      <input
        ref={checkbox}
        name={props.name}
        className="toggle-checkbox"
        type="checkbox"
        defaultChecked={props.value}
        value={props.value || false}
      />
      <span
        ref={toggle}
        onClick={handleToggle}
        className={props.checked ? 'toggled' : 'toggle-switch'}
      >
        <span className="toggle" />
      </span>
    </div>
  );
}
