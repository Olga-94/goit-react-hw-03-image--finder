import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { onInfoNotification } from 'Services/Notification';
import { IoSearchSharp } from 'react-icons/io5';
import {
  SearchbarBox,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchBar.styled';

export class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  handleInputChange = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      onInfoNotification();
      return;
    }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <SearchbarBox as="header">
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit"> <IoSearchSharp />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>
          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchQuery"
            value={this.state.searchQuery}
            onChange={this.handleInputChange}
          />
        </SearchForm>
      </SearchbarBox>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
