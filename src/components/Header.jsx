import React, {useContext, useEffect, useState} from 'react';
import '../css/Header.css'
import {AddNotificationCounter} from "../App.jsx";


const Header = () => {
	const notificationContext = useContext(AddNotificationCounter)
	return (
		<header>
			<div>
				<a href="/">
					<svg width="85" height="23" viewBox="0 0 85 23" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M21 19.875C20.4333 20.575 19.7417 21.1083 18.925 21.475C18.125 21.8417 17.2417 22.025 16.275 22.025C14.975 22.025 13.8 21.7417 12.75 21.175C11.7 20.625 10.5 19.6417 9.15 18.225C7.56667 18.025 6.15 17.5167 4.9 16.7C3.66667 15.8833 2.7 14.8333 2 13.55C1.31667 12.25 0.975 10.8167 0.975 9.25C0.975 7.53333 1.38333 5.99167 2.2 4.625C3.03333 3.24167 4.175 2.15833 5.625 1.375C7.09167 0.591666 8.73333 0.2 10.55 0.2C12.3667 0.2 14 0.591666 15.45 1.375C16.9 2.15833 18.0417 3.24167 18.875 4.625C19.7083 5.99167 20.125 7.53333 20.125 9.25C20.125 11.2833 19.55 13.0667 18.4 14.6C17.2667 16.1333 15.7583 17.2 13.875 17.8C14.2917 18.2333 14.6917 18.5417 15.075 18.725C15.475 18.925 15.9 19.025 16.35 19.025C17.4333 19.025 18.3833 18.5917 19.2 17.725L21 19.875ZM5.075 9.25C5.075 10.3333 5.30833 11.3 5.775 12.15C6.25833 13 6.91667 13.6667 7.75 14.15C8.58333 14.6167 9.51667 14.85 10.55 14.85C11.5833 14.85 12.5167 14.6167 13.35 14.15C14.1833 13.6667 14.8333 13 15.3 12.15C15.7833 11.3 16.025 10.3333 16.025 9.25C16.025 8.16667 15.7833 7.2 15.3 6.35C14.8333 5.5 14.1833 4.84167 13.35 4.375C12.5167 3.89167 11.5833 3.65 10.55 3.65C9.51667 3.65 8.58333 3.89167 7.75 4.375C6.91667 4.84167 6.25833 5.5 5.775 6.35C5.30833 7.2 5.075 8.16667 5.075 9.25ZM30.7438 0.499999C32.2938 0.499999 33.6354 0.758332 34.7688 1.275C35.9188 1.79167 36.8021 2.525 37.4188 3.475C38.0354 4.425 38.3438 5.55 38.3438 6.85C38.3438 8.13333 38.0354 9.25833 37.4188 10.225C36.8021 11.175 35.9188 11.9083 34.7688 12.425C33.6354 12.925 32.2938 13.175 30.7438 13.175H27.2188V18H23.1688V0.499999H30.7438ZM30.5188 9.875C31.7354 9.875 32.6604 9.61667 33.2938 9.1C33.9271 8.56667 34.2438 7.81667 34.2438 6.85C34.2438 5.86667 33.9271 5.11667 33.2938 4.6C32.6604 4.06667 31.7354 3.8 30.5188 3.8H27.2188V9.875H30.5188ZM41.2352 0.499999H45.2852V18H41.2352V0.499999ZM57.8133 18.3C56.0299 18.3 54.4133 17.9167 52.9633 17.15C51.5299 16.3667 50.3966 15.2917 49.5633 13.925C48.7466 12.5417 48.3383 10.9833 48.3383 9.25C48.3383 7.51667 48.7466 5.96667 49.5633 4.6C50.3966 3.21667 51.5299 2.14167 52.9633 1.375C54.4133 0.591666 56.0383 0.2 57.8383 0.2C59.3549 0.2 60.7216 0.466666 61.9383 1C63.1716 1.53333 64.2049 2.3 65.0383 3.3L62.4383 5.7C61.2549 4.33333 59.7883 3.65 58.0383 3.65C56.9549 3.65 55.9883 3.89167 55.1383 4.375C54.2883 4.84167 53.6216 5.5 53.1383 6.35C52.6716 7.2 52.4383 8.16667 52.4383 9.25C52.4383 10.3333 52.6716 11.3 53.1383 12.15C53.6216 13 54.2883 13.6667 55.1383 14.15C55.9883 14.6167 56.9549 14.85 58.0383 14.85C59.7883 14.85 61.2549 14.1583 62.4383 12.775L65.0383 15.175C64.2049 16.1917 63.1716 16.9667 61.9383 17.5C60.7049 18.0333 59.3299 18.3 57.8133 18.3ZM74.1482 11.125L71.7982 13.575V18H67.7732V0.499999H71.7982V8.675L79.5482 0.499999H84.0482L76.7982 8.3L84.4732 18H79.7482L74.1482 11.125Z" fill="#101010"/>
					</svg>
					<div className="notification">
						{notificationContext.notificationCounter}
					</div>
				</a>
			</div>
			<div className="header__icons">
				<svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M11.4867 1.65429C14.0706 -0.627558 18.0635 -0.551821 20.5528 1.90098C23.0409 4.35486 23.1267 8.2629 20.8124 10.812L11.4845 20L2.15892 10.812C-0.155442 8.2629 -0.0685429 4.34837 2.41851 1.90098C4.90996 -0.548575 8.89519 -0.630804 11.4867 1.65429ZM18.9952 3.42979C17.3452 1.80469 14.6833 1.73869 12.9563 3.26425L11.4878 4.56044L10.0183 3.26533C8.2858 1.73761 5.62935 1.80469 3.97498 3.43195C2.33601 5.04407 2.25351 7.62455 3.76379 9.32971L11.4856 16.937L19.2075 9.3308C20.7189 7.62455 20.6364 5.04732 18.9952 3.42979Z" fill="#838383"/>
				</svg>
				<a href="/cart">
					<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M4.08589 6.04602L0.48584 2.50535L2.05663 0.959991L5.65556 4.50175H22.5757C22.7487 4.50174 22.9193 4.54152 23.074 4.61792C23.2286 4.69431 23.3629 4.80521 23.4662 4.94176C23.5695 5.07831 23.639 5.23673 23.669 5.40438C23.699 5.57202 23.6888 5.74425 23.6391 5.90732L20.9749 14.6443C20.9064 14.8694 20.7659 15.0667 20.5743 15.207C20.3827 15.3473 20.1503 15.423 19.9114 15.423H6.30608V17.6072H18.5172V19.7915H5.19598C4.90157 19.7915 4.61921 19.6764 4.41103 19.4716C4.20284 19.2668 4.08589 18.989 4.08589 18.6994V6.04602ZM6.30608 6.686V13.2387H19.0855L21.0837 6.686H6.30608ZM5.75103 24.16C5.30941 24.16 4.88587 23.9874 4.5736 23.6802C4.26132 23.373 4.08589 22.9563 4.08589 22.5218C4.08589 22.0873 4.26132 21.6707 4.5736 21.3634C4.88587 21.0562 5.30941 20.8836 5.75103 20.8836C6.19266 20.8836 6.61619 21.0562 6.92847 21.3634C7.24074 21.6707 7.41618 22.0873 7.41618 22.5218C7.41618 22.9563 7.24074 23.373 6.92847 23.6802C6.61619 23.9874 6.19266 24.16 5.75103 24.16ZM19.0722 24.16C18.6306 24.16 18.207 23.9874 17.8948 23.6802C17.5825 23.373 17.4071 22.9563 17.4071 22.5218C17.4071 22.0873 17.5825 21.6707 17.8948 21.3634C18.207 21.0562 18.6306 20.8836 19.0722 20.8836C19.5138 20.8836 19.9374 21.0562 20.2496 21.3634C20.5619 21.6707 20.7373 22.0873 20.7373 22.5218C20.7373 22.9563 20.5619 23.373 20.2496 23.6802C19.9374 23.9874 19.5138 24.16 19.0722 24.16Z" fill="#838383"/>
					</svg>
				</a>
			</div>
		</header>
	);
};

export default Header;
