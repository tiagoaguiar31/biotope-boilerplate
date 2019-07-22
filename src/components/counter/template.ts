import classNames from 'classnames';
import { wire } from "hyperhtml";

interface XButtonTemplateData {
  add?: boolean,
  remove?: boolean
  disabled?: boolean,
  btnText: string;
  value?: number,
  type?: string,
}

export default (render: Function, {value, add, remove, disabled, btnText, type}: XButtonTemplateData) => {

  const btnClass = classNames('x-button__btn', {
    ['x-button__btn--add']: add,
    ['x-button__btn--remove']: remove,
  });

  const renderCounter = () => (
    wire()`<button type="${type}" class="${btnClass}" disabled="${disabled}">${btnText}</button>`
  );
  
  return (
    render`
    <h2>${value}</h2>
    ${renderCounter()}`);
}
