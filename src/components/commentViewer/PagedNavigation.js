import React from 'react';
import './PagedNavigation.css';

class PagedNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    handlePrevious = () => {
         const newItemIndex = this.props.itemIndex - 1;
         console.log(newItemIndex);
         if (newItemIndex >= 0)
            this.props.onPageChange(newItemIndex);
    };

    handleNext = () => {
         const newItemIndex = this.props.itemIndex + 1;
         if (newItemIndex < this.props.itemCount)
            this.props.onPageChange(newItemIndex);
    };

    render() {
        const pageText = `${this.props.itemIndex + 1}/${this.props.itemCount}`;
        const prevDisabled = this.props.itemIndex === 0;
        const nextDisabled = this.props.itemIndex === this.props.itemCount - 1;

        return (
          <div className='paged-navigation'>
              <input type='button'
                  className='paged-navigation__previous'
                  onClick={this.handlePrevious}
                  value='Previous'
                  disabled={prevDisabled}
              />
              <span className='paged-navigation__status'>{pageText}</span>
              <input type='button'
                  className='paged-navigation__next'
                  onClick={this.handleNext}
                  disabled={nextDisabled}
                  value='Next'
              />
          </div>
        );
    }
}


export default PagedNavigation;