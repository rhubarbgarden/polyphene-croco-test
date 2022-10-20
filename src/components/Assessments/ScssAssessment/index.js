import React  from 'react';

export default function ScssAssessment() {

//   1. Respect the proportions of the drawing. The cells of the checkerboard have different widths and 
// heights on purpose, their differences should appear in the deliverable. Nonetheless, the widths 
// and heights values in pixels can differ from the picture.
// 2. Respect the color that are given on the picture.
// 3. **A specific styling rule should be added**: on `hover`, a cell styling should change. The colors
// used for the cell and the alignment of the text should change to the styling of the other cell 
// (e.g.: Bottom-right text should be found in the center of the cell).

  return (
    <div className="grid grid-cols-1 divide-y divide-none text-left">
      <h3 className="font-medium leading-tight text-3xl m-2 text-blue-600 w-fit">
        1. Styling
      </h3>
      <p className="subpixel-antialiased w-fit m-2">
        In this first test we will try out your skills in styling elements.
      </p>
      <p className="subpixel-antialiased w-fit m-2">
        Your goal is to reproduce the checkerboard presented in the picture below with HTML elements, and
        SCSS or Tailwind styling. <span className="font-bold">Before starting your work, please refer
        to the README for more detailed directions!</span>
      </p>
      <img src="/images/styling-test.png" alt="styling-test" />

    {/* SCSS */}
    <div className='styling'>
      <div className='top'>
        <div className='john'>john</div>
        <div className='doe'>doe</div>
        <div className='john'>john</div>
      </div>
      <div className='bottom'>
        <div className='doe'>doe</div>
        <div>
          <div className='doe'>doe</div>
          <div className='john'>john</div>
        </div>
      </div>
    </div>

    </div>
  );
}
