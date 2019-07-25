import Component from '@biotope/element';
import MY_BUTTON_EVENTS from './events';
import { wire } from 'hyperhtml';
import classNames from 'classnames';

  interface CounterButtonProps {
    add?: boolean;
    remove?: boolean;
    title?: string;
    type: string;
  }

export default class CounterButton extends Component< CounterButtonProps > {
  
  public static componentName = 'counter-button';
  protected static attributes = [
    'title',
    'add',
    'remove',
  ];

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  protected get defaultProps(): CounterButtonProps {
    return {
      type: 'btn'
    }
  }

  private get button(): HTMLElement {
    return this.shadowRoot.querySelector('.counter-button__btn');
  }

  public connectedCallback() {
    this.button.addEventListener('click', this.onClick);
  }

  public disconnectedCallback() {
    this.button.removeEventListener('click', this.onClick);
  }

  private onClick() {
    this.emit(MY_BUTTON_EVENTS.PRESSED);
  }
  
  renderButton = (title:string, add:boolean, remove:boolean) => {
    const btnClass = classNames('counter-button__btn ', {
      ['counter-button__btn--add']: add,
      ['counter-button__btn--remove']: remove,
    });
    
    return wire()`<button type="${this.props.type}" class="${btnClass}">${title}</button>`
  };

  render() {

    return (
      this.html`
      <style>
        .counter-button__btn {
          padding: 7px 26px;
          border-radius: 20px;
          margin: 10px;
          font-size: 14px;
          border: 1px solid white;
          cursor: pointer;
          font-weight: bold;
          display: inline-block;
        }
        .counter-button__btn--remove {
          background-color: red;
          color: white;
        }
        .counter-button__btn--add {
          background-color: green;
          color: white;
        }

      </style>
      
      ${this.renderButton(this.props.title, this.props.add, this.props.remove)}`)
  }
}

