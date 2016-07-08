import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/App';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders', () => {
    expect(wrapper).to.have.length(1);
  });

  it('renders div within it', () => {
    expect(wrapper.find('div')).to.have.length(1);
  });

  it('render hello message', () => {
    expect(wrapper.text()).to.eql('Hello user!');
  });
});
