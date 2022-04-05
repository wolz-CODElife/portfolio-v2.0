// imports
import { React, useEffect, useRef } from "react";
import anime from "animejs";
import "./index.scss";

// component
function Loader() {
  const anim = useRef(null);
  const tl = anime.timeline({
    easing: "easeInOutExpo",
  });
  useEffect(() => {
    anim.current = tl
      .add({
        targets: ".loader__brandPath",
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 4000,
      })
      .add({
        targets: ".loader__brandVector",
        scale: [1, 3],
        duration: 3000,
        opacity: 0,
      })
      .add({
        delay: 3,
        display: "none",
      });
  });

  return (
    <div className="loader" align="center">
      <div className="loader__wrapper">
        <div className="loader__brand">
          <svg
            viewBox="0 0 324 49"
            xmlns="http://www.w3.org/2000/svg"
            className="loader__brandVector"
          >
            <path
              className="loader__brandPath"
              d="M0.66 2.2H18.9C25.044 2.2 30.2067 4.35466 34.388 8.664C38.5693 12.9733 40.66 18.2853 40.66 24.6C40.66 30.9573 38.5693 36.2907 34.388 40.6C30.2493 44.8667 25.0867 47 18.9 47H0.66V2.2ZM12.436 35.928H18.9C21.972 35.928 24.5107 34.904 26.516 32.856C28.4787 30.7653 29.46 28.0133 29.46 24.6C29.46 21.144 28.4787 18.4133 26.516 16.408C24.5533 14.3173 22.0147 13.272 18.9 13.272H12.436V35.928ZM75.1565 34.904H53.0765C54.1432 37.5067 56.5325 38.808 60.2445 38.808C62.5058 38.808 64.4472 38.0613 66.0685 36.568L73.7485 41.944C70.6338 45.912 66.0472 47.896 59.9885 47.896C54.5698 47.896 50.2178 46.3173 46.9325 43.16C43.6898 39.96 42.0685 35.928 42.0685 31.064C42.0685 26.2427 43.6685 22.2107 46.8685 18.968C50.0685 15.7253 54.1432 14.104 59.0925 14.104C63.8712 14.104 67.8178 15.704 70.9325 18.904C74.0472 22.0613 75.6045 26.072 75.6045 30.936C75.6045 32.4293 75.4552 33.752 75.1565 34.904ZM52.9485 27.544H65.2365C64.4258 24.5573 62.4205 23.064 59.2205 23.064C55.9352 23.064 53.8445 24.5573 52.9485 27.544ZM91.653 33.368L97.605 15H109.381L97.413 47H85.893L73.925 15H85.701L91.653 33.368ZM142.258 32.408L146.482 15H157.746L147.954 47H137.586L132.978 30.744L128.37 47H118.002L108.21 15H119.474L123.698 32.408L128.498 15H137.458L142.258 32.408ZM170.281 15V20.952C170.878 18.904 172.052 17.304 173.801 16.152C175.593 14.9573 177.62 14.36 179.881 14.36V26.136C177.449 25.752 175.23 26.2 173.225 27.48C171.262 28.76 170.281 30.8507 170.281 33.752V47H159.657V15H170.281ZM203.766 17.944V15H214.39V47H203.766V44.056C201.59 46.616 198.561 47.896 194.678 47.896C190.369 47.896 186.785 46.296 183.926 43.096C181.068 39.8533 179.638 35.8213 179.638 31C179.638 26.136 181.068 22.1253 183.926 18.968C186.785 15.7253 190.369 14.104 194.678 14.104C198.561 14.104 201.59 15.384 203.766 17.944ZM192.182 36.056C193.377 37.336 194.998 37.976 197.046 37.976C199.094 37.976 200.716 37.336 201.91 36.056C203.148 34.7333 203.766 33.048 203.766 31C203.766 28.952 203.148 27.2667 201.91 25.944C200.716 24.664 199.094 24.024 197.046 24.024C194.998 24.024 193.377 24.664 192.182 25.944C190.945 27.2667 190.326 28.952 190.326 31C190.326 33.048 190.945 34.7333 192.182 36.056ZM228.229 10.584C227.035 11.7787 225.605 12.376 223.941 12.376C222.277 12.376 220.827 11.7787 219.589 10.584C218.395 9.34666 217.797 7.896 217.797 6.232C217.797 4.568 218.395 3.13866 219.589 1.944C220.827 0.74933 222.277 0.151997 223.941 0.151997C225.605 0.151997 227.035 0.74933 228.229 1.944C229.467 3.13866 230.085 4.568 230.085 6.232C230.085 7.896 229.467 9.34666 228.229 10.584ZM229.253 47H218.629V15H229.253V47ZM253.299 15V25.176H246.643V34.456C246.643 35.8213 247.113 36.696 248.051 37.08C249.033 37.4213 250.782 37.528 253.299 37.4V47C246.985 47.768 242.505 47.192 239.859 45.272C237.299 43.2667 236.019 39.7467 236.019 34.712V25.176H231.219V15H236.019V9.24L246.643 6.04V15H253.299ZM275.81 14.104C279.351 14.104 282.188 15.32 284.322 17.752C286.498 20.1413 287.586 23.512 287.586 27.864V47H276.962V29.208C276.962 27.5867 276.535 26.3493 275.682 25.496C274.828 24.6 273.655 24.152 272.162 24.152C270.498 24.152 269.196 24.664 268.258 25.688C267.362 26.6693 266.914 28.0987 266.914 29.976V47H256.29V2.2H266.914V18.2C268.834 15.4693 271.799 14.104 275.81 14.104ZM322.921 34.904H300.841C301.908 37.5067 304.297 38.808 308.009 38.808C310.271 38.808 312.212 38.0613 313.833 36.568L321.513 41.944C318.399 45.912 313.812 47.896 307.753 47.896C302.335 47.896 297.983 46.3173 294.697 43.16C291.455 39.96 289.833 35.928 289.833 31.064C289.833 26.2427 291.433 22.2107 294.633 18.968C297.833 15.7253 301.908 14.104 306.857 14.104C311.636 14.104 315.583 15.704 318.697 18.904C321.812 22.0613 323.369 26.072 323.369 30.936C323.369 32.4293 323.22 33.752 322.921 34.904ZM300.713 27.544H313.001C312.191 24.5573 310.185 23.064 306.985 23.064C303.7 23.064 301.609 24.5573 300.713 27.544Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

// export
export default Loader;
