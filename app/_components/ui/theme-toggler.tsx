import { useState } from 'react';

export default function ThemeToggler() {
  const [isChecked, setIsChecked] = useState(false);

  function handleToggle() {
    setIsChecked(!isChecked);
    // console.log('Toggling', e)
    console.log('Toggling toggle')
  };

  return (
    <section className="flex justify-center items-center">
      <input
        id="checkbox"
        type="checkbox"
        className="hidden"
        checked={isChecked}
        // onChange={handleToggle}
      />
      <label
        className={`flex items-center justify-center p-2 rounded-full cursor-pointer transition-all duration-700 ease-in-out ${
          isChecked ? 'bg-yellow-500 shadow-[0_0_100px_rgb(255,196,0)]' : 'bg-gray-800'
        }`}
        onClick={handleToggle} 
        htmlFor="checkbox"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          height="3em"
          className="w-6 h-6"
        >
          <path
            d="M77.547 120.684h-5.765l-1.698 3.012a7.477 7.477 0 0 1-6.513 3.804h-.003a7.479 7.479 0 0 1-6.513-3.804l-1.698-3.012h-5.765v-4.06h27.956v4.06z"
            className="fill-gray-600"
          ></path>
          <path
            d="M77.547 113.65H49.591v-4.279h27.956v4.279zm0-11.711H49.591v4.279h27.956v-4.279zm38.587-32.576-12.209-3.271.92-3.434 12.209 3.271-.92 3.434zm-104.268 0-.92-3.434 12.209-3.271.92 3.434-12.209 3.271zm92.979-24.913-.92-3.434 12.209-3.272.92 3.434-12.209 3.272zm-81.69 0-12.209-3.272.92-3.434 12.209 3.272-.92 3.434zM94.82 25.247l-2.514-2.514 8.938-8.938 2.514 2.514-8.938 8.938zm-61.64 0-8.937-8.938 2.514-2.514 8.937 8.938-2.514 2.514zm43.358-11.618-3.434-.92L76.376.5l3.434.92-3.272 12.209zm-25.076 0L48.191 1.42 51.625.5l3.272 12.209-3.435.92z"
            className="fill-gray-400"
          ></path>
          <path
            d="M59.802 64.141h7.535v34.934h-7.535V64.141zm3.767-44.754c-18.485-.53-33.631 14.817-33.631 33.824 0 9.781 4.016 18.581 10.431 24.753 5.637 5.423 9.222 13.147 9.222 21.111h7.84V64.141H51.75c-4.44 0-8.051-3.612-8.051-8.051s3.612-8.051 8.051-8.051 8.052 3.612 8.052 8.051v5.681h7.535V56.09c0-4.44 3.612-8.051 8.052-8.051 4.44 0 8.051 3.612 8.051 8.051s-3.612 8.051-8.051 8.051h-5.682v34.934h7.84c0-7.964 3.584-15.688 9.222-21.111C93.184 71.792 97.2 62.992 97.2 53.211c0-19.008-15.146-34.355-33.631-33.824zM51.75 50.408a5.687 5.687 0 0 0-5.681 5.681 5.687 5.687 0 0 0 5.681 5.681h5.682v-5.681a5.688 5.688 0 0 0-5.682-5.681zM75.389 61.77h-5.682v-5.681a5.688 5.688 0 0 1 5.682-5.681 5.687 5.687 0 0 1 5.681 5.681 5.687 5.687 0 0 1-5.681 5.681z"
            className="fill-white"
          ></path>
        </svg>
      </label>
    </section>
  );
};


// <label className="switch">
// 	<input type="checkbox" />
// 	<span className="slider"></span>
// </label>
/* The switch - the box around the slider */
// .switch {
//   font-size: 17px;
//   position: relative;
//   display: inline-block;
//   width: 3.5em;
//   height: 2em;
// }

// /* Hide default HTML checkbox */
// .switch input {
//   opacity: 0;
//   width: 0;
//   height: 0;
// }

// /* The slider */
// .slider {
//   --background: #28096b;
//   position: absolute;
//   cursor: pointer;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: var(--background);
//   transition: .5s;
//   border-radius: 30px;
// }

// .slider:before {
//   position: absolute;
//   content: "";
//   height: 1.4em;
//   width: 1.4em;
//   border-radius: 50%;
//   left: 10%;
//   bottom: 15%;
//   box-shadow: inset 8px -4px 0px 0px #fff000;
//   background: var(--background);
//   transition: .5s;
// }

// input:checked + .slider {
//   background-color: #522ba7;
// }

// input:checked + .slider:before {
//   transform: translateX(100%);
//   box-shadow: inset 15px -4px 0px 15px #fff000;
// }
