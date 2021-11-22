import { SvgIcon } from '@mui/material'
import { motion } from 'framer-motion'

export default function HeroTextSvg() {
	const thirdPathVariant = {
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				delay: 3,
				duration: 2,
				times: [0, 0.2, 1],
			},
		},
		hidden: {
			scale: 0,
			opacity: 0,
		},
	}

	return (
		<SvgIcon
			color='warning'
			sx={{
				width: '70%',
				height: '70%',
				position: 'absolute',
				top: '-20%',
				left: '-20%',
			}}
			viewBox='0 0 255 147'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			{/* LETTER W */}
			<motion.path
				initial='hidden'
				animate='visible'
				variants={thirdPathVariant}
				d='M74.835 41.7524C74.7932 42.0297 74.6978 42.5337 74.5488 43.2644C74.3997 43.9951 74.349 44.4618 74.3967 44.6646C74.4922 45.0702 74.5921 45.6085 74.6965 46.2795C74.8397 46.8879 75.132 47.2204 75.5734 47.277C75.2901 48.5743 75.2156 49.8492 75.3499 51.1018C75.5229 52.2917 75.7586 53.5204 76.0569 54.7879C76.3432 56.0046 76.6102 57.2527 76.8578 58.5321C77.0934 59.7608 77.171 60.9999 77.0906 62.2495C77.365 62.5059 77.5051 62.8743 77.5111 63.3544C77.5559 63.7719 77.7602 64.0716 78.124 64.2535C77.966 64.7188 77.9093 65.1602 77.9541 65.5777C77.9869 65.9445 78.0511 66.3307 78.1465 66.7363C78.3374 67.5475 78.5984 68.3154 78.9295 69.0401C78.5627 69.9825 78.4986 70.9607 78.7373 71.9746C79.0147 72.926 79.2727 73.9086 79.5113 74.9226C79.7141 75.7845 79.7843 76.6508 79.7217 77.5216C79.7098 78.3805 79.8053 79.2409 80.0081 80.1028C80.0678 80.3563 80.1468 80.5785 80.2452 80.7693C80.3436 80.9602 80.4227 81.1823 80.4823 81.4358C80.542 81.6893 80.4824 81.8906 80.3034 82.0398C80.1633 82.1263 80.1409 82.3723 80.2364 82.7779C80.6778 84.6537 80.9806 86.5087 81.1447 88.3428C81.2969 90.1262 81.3731 91.9275 81.3731 93.7467C81.412 95.5032 81.4061 97.2971 81.3555 99.1282C81.3049 100.959 81.311 102.804 81.3737 104.662C80.9592 105.401 80.6893 106.187 80.5641 107.019C80.4896 107.839 80.1511 108.561 79.5487 109.185C79.2834 111.013 78.8048 112.731 78.113 114.338C77.4719 115.934 76.6861 117.483 75.7557 118.986C74.876 120.477 73.9337 121.93 72.9287 123.343C71.9357 124.808 70.974 126.291 70.0436 127.794C69.5366 127.914 69.0296 128.033 68.5226 128.152C68.0783 128.31 67.6026 128.449 67.0956 128.568C65.9803 128.831 64.853 129.043 63.7138 129.204C62.5745 129.365 61.4681 129.438 60.3945 129.423C60.0247 128.761 59.5057 128.375 58.8377 128.265C58.2323 128.193 57.6477 127.983 57.0841 127.634C56.4697 127.297 55.9702 126.88 55.5854 126.382C55.2007 125.884 54.5789 125.629 53.72 125.617C53.2875 124.916 52.6731 124.124 51.8768 123.241C51.1312 122.347 50.3796 121.427 49.6221 120.481C48.8645 119.536 48.1696 118.629 47.5373 117.762C46.9438 116.831 46.5635 116.011 46.3965 115.301C46.3368 115.048 46.3085 114.814 46.3114 114.599C46.3532 114.322 46.3696 114.05 46.3606 113.785C45.9729 113.502 45.6627 113.093 45.4301 112.559C45.1974 112.025 44.9901 111.486 44.8082 110.94C44.665 110.331 44.4831 109.786 44.2624 109.303C44.0297 108.769 43.7002 108.391 43.2737 108.171C42.7608 108.72 42.3984 109.34 42.1867 110.032C41.975 110.724 41.8006 111.46 41.6634 112.242C41.577 113.011 41.4905 113.781 41.4041 114.55C41.3176 115.319 41.1686 116.05 40.9569 116.742C40.3783 117.467 39.8937 118.25 39.5031 119.091C39.1632 119.92 38.7979 120.755 38.4072 121.596C38.0792 122.476 37.6826 123.291 37.2174 124.043C36.7642 124.845 36.1797 125.544 35.4639 126.141C35.4759 127.101 35.2747 127.951 34.8602 128.691C34.5083 129.469 34.0878 130.183 33.5987 130.834C33.1216 131.534 32.6698 132.229 32.2434 132.918C31.8289 133.658 31.5963 134.489 31.5457 135.41C30.7792 136.018 29.9532 136.828 29.0675 137.839C28.1937 138.901 27.2946 139.969 26.3702 141.042C25.4964 142.104 24.5675 143.045 23.5834 143.865C22.6619 144.724 21.7956 145.249 20.9844 145.44C20.3253 145.595 19.6737 145.668 19.0295 145.659C18.448 145.689 17.8351 145.7 17.1909 145.691C16.5468 145.682 15.9026 145.673 15.2584 145.664C14.6262 145.706 13.9865 145.829 13.3393 146.035C12.1374 145.248 11.1279 144.255 10.3107 143.056C9.50542 141.908 8.5913 140.866 7.56833 139.929C6.95689 138.468 6.33949 136.981 5.71612 135.469C5.10468 134.008 4.61999 132.517 4.26204 130.996C4.0592 130.134 3.96969 129.299 3.99351 128.491C4.02927 127.733 3.95765 126.974 3.77868 126.214C3.71902 125.961 3.61463 125.744 3.46551 125.565C3.35515 125.324 3.2448 125.082 3.13444 124.841C3.32229 124.047 3.42812 123.247 3.45194 122.438C3.46383 121.58 3.42502 120.733 3.33551 119.898C3.2967 119.051 3.26385 118.229 3.23698 117.433C3.19817 116.586 3.24733 115.772 3.38448 114.99C3.3427 114.358 3.05787 113.943 2.53 113.747C2.80137 113.308 2.94002 112.874 2.94596 112.445C2.95191 112.015 2.90715 111.598 2.8117 111.192C2.76695 110.775 2.69088 110.338 2.58349 109.882C2.47611 109.425 2.42539 108.982 2.43133 108.553C2.43431 108.338 2.48946 108.004 2.5968 107.551L2.97697 106.097C3.12308 105.581 3.23042 105.128 3.299 104.737C3.40634 104.284 3.43614 103.956 3.38842 103.753C3.3049 103.398 3.11401 103.042 2.81577 102.684C2.77993 101.622 2.8768 100.556 3.10639 99.4853C3.38667 98.4028 3.53424 97.3247 3.5491 96.251C3.56396 95.1774 3.50725 94.2544 3.37898 93.482C3.23877 92.6589 3.24618 91.6673 3.4012 90.5072C3.42804 90.3938 3.42356 90.2611 3.38776 90.109C3.34004 89.9062 3.23416 89.7974 3.07014 89.7825C2.90611 89.7676 2.7555 89.696 2.61831 89.5678C2.95226 88.2585 3.11622 86.9091 3.11019 85.5193C3.14293 84.0669 3.09365 82.6071 2.96236 81.1398C2.88177 79.6606 2.78179 78.2127 2.66243 76.7962C2.53114 75.3289 2.51914 73.9138 2.62644 72.5509C2.23572 71.5727 1.86437 70.5632 1.51241 69.5224C1.14852 68.4309 0.847261 67.3782 0.60863 66.3642C0.334204 65.1982 0.155209 63.9829 0.0716446 62.7184C0.0387784 61.442 0.320547 60.2521 0.916951 59.1486C1.32254 59.0531 1.74751 58.9264 2.19186 58.7683C2.68691 58.5983 3.13723 58.4655 3.54281 58.3701C4.15119 58.2269 4.84606 58.2239 5.62743 58.361C6.36413 59.8999 7.19626 61.3895 8.12381 62.8299C9.05137 64.2703 9.72395 65.8777 10.1416 67.6521C10.3444 68.514 10.4458 69.3997 10.4459 70.3093L10.5042 72.9442C10.543 73.7911 10.6131 74.6575 10.7145 75.5432C10.804 76.3782 11.0203 77.1834 11.3633 77.9588C10.9846 78.8505 10.8639 79.8153 11.0011 80.8531C11.1771 81.8283 11.3665 82.7469 11.5693 83.6088C11.2294 84.4378 11.0162 85.2371 10.9298 86.0065C10.8433 86.776 10.8135 87.5588 10.8404 88.3551C10.9061 89.0887 10.9777 89.8477 11.0552 90.6321C11.1328 91.4164 11.185 92.2067 11.2119 93.003C11.1702 93.2803 11.0643 93.6263 10.8944 94.0408C10.7751 94.4434 10.7333 94.7208 10.7691 94.8729C10.8527 95.2278 11.0376 95.5588 11.3239 95.8659C11.2583 96.0419 11.1867 96.1925 11.1092 96.3178C11.0197 96.3923 10.9735 96.537 10.9705 96.7517C10.9497 97.3452 10.9661 97.9834 11.0198 98.6663C11.1123 99.2866 11.1481 99.8935 11.1273 100.487C11.1721 101.814 11.1095 103.14 10.9396 104.464C10.8204 105.776 10.6758 107.094 10.5059 108.418C10.7445 109.432 10.8847 110.255 10.9265 110.888C11.019 111.508 11.0488 112.09 11.016 112.632C11.022 113.113 10.9892 113.655 10.9177 114.261C10.8849 114.803 10.8879 115.498 10.9267 116.345C10.9536 117.142 11.0223 118.115 11.1327 119.266C11.2938 120.406 11.4414 121.602 11.5757 122.854C11.7487 124.044 11.9471 125.228 12.1708 126.406C12.3826 127.533 12.584 128.503 12.7749 129.314C13.1209 130.784 13.5817 132.174 14.1574 133.483C14.7956 134.831 15.6188 136.055 16.6269 137.155L17.9197 136.851C18.2239 136.78 18.5534 136.702 18.9083 136.618C19.2751 136.586 19.6285 136.609 19.9685 136.69C20.2995 136.505 20.4412 136.311 20.3935 136.108L20.2503 135.5C20.2145 135.348 20.2935 135.115 20.4873 134.802L21.0376 134.753C21.5445 134.634 21.9829 134.45 22.3527 134.203C22.7732 133.943 23.1818 133.633 23.5784 133.272C24.2314 131.727 25.0843 130.349 26.137 129.139C27.2404 127.916 28.1559 126.577 28.8835 125.121C29.0415 124.656 29.0042 124.157 28.7716 123.623C29.3561 123.378 29.7587 123.043 29.9794 122.616C30.2507 122.178 30.4908 121.72 30.6995 121.243C30.9082 120.766 31.123 120.314 31.3436 119.887C31.6031 119.398 31.9937 119.012 32.5156 118.729C32.6617 118.213 32.7765 117.677 32.86 117.123C32.9315 116.517 33.009 115.937 33.0925 115.382C33.2267 114.816 33.3981 114.294 33.6069 113.817C33.8544 113.277 34.2271 112.815 34.7252 112.43C35.1336 110.301 35.4034 108.15 35.5346 105.979C35.6537 103.757 36.1189 101.641 36.93 99.6313C36.7748 98.9723 36.657 98.3579 36.5765 97.7883C36.4959 97.2187 36.3334 96.6416 36.0888 96.0571C36.9506 94.0351 37.3382 92.0444 37.2516 90.085C37.165 88.1257 36.8771 86.1067 36.3879 84.0281C35.9823 82.3043 36.2595 80.9817 37.2198 80.0601C38.2307 79.1266 39.522 78.4749 41.0937 78.105L41.8542 77.9261C42.1583 77.8545 42.4432 77.8142 42.7086 77.8052C42.8935 78.1363 43.1366 78.3733 43.4378 78.5165C43.7778 78.597 44.1237 78.7028 44.4756 78.834L44.583 79.2903C44.7501 80.0001 44.8038 80.683 44.7442 81.3391C44.7233 81.9326 44.7904 82.5589 44.9455 83.218C45.0171 83.5222 45.1633 83.9158 45.384 84.3989C46.237 85.7499 46.9334 87.0039 47.4733 88.161C48.0638 89.3061 48.55 90.6899 48.9318 92.3122C49.254 93.6811 49.506 95.0932 49.688 96.5485C49.9088 97.9413 50.0788 99.3459 50.1982 100.762C50.6336 101.249 50.9229 101.796 51.0661 102.404C51.1616 102.81 51.2123 103.253 51.2183 103.733C51.263 104.15 51.3331 104.562 51.4286 104.967C51.6314 105.829 51.961 106.661 52.4173 107.464C52.9124 108.203 53.4075 108.943 53.9026 109.682C54.4484 110.41 54.9435 111.15 55.3879 111.901C55.8323 112.653 56.1246 113.44 56.2648 114.263C57.3772 115.125 58.3942 116.036 59.3158 116.996C60.3 117.995 61.4005 118.806 62.6173 119.429C63.0468 119.435 63.3882 119.409 63.6417 119.349C63.9459 119.277 64.1875 119.167 64.3664 119.018C64.5573 118.919 64.7168 118.802 64.845 118.664C65.0359 118.566 65.2268 118.468 65.4176 118.369C65.6204 118.321 65.9306 118.275 66.3481 118.23C67.1055 117.357 67.7631 116.399 68.3207 115.358C68.8903 114.368 69.4032 113.365 69.8594 112.348C70.3664 111.319 70.8674 110.265 71.3624 109.185C71.8574 108.105 72.3897 107.07 72.9592 106.08C73.5704 102.084 73.9027 98.1533 73.9562 94.2883C74.0097 90.4233 73.6725 86.4896 72.9447 82.4875C72.8134 81.9298 72.8746 81.6211 73.128 81.5614C73.3815 81.5018 73.5679 81.2707 73.6872 80.868L73.1861 78.7387C72.8043 77.1164 72.4985 75.4761 72.2688 73.818C72.0898 72.1479 72.0941 70.4614 72.282 68.7585C71.9867 68.186 71.7675 67.5955 71.6243 66.9871C71.3141 65.6689 71.1172 64.3776 71.0336 63.1131C70.9888 61.786 70.8173 60.4887 70.519 59.2213C70.3639 58.5622 70.1327 57.921 69.8255 57.2978C69.5571 56.6118 69.1544 56.0378 68.6176 55.5755L68.4342 55.1372C68.3626 54.833 68.4043 54.5556 68.5594 54.3051C68.7651 54.0426 68.8889 53.7727 68.9306 53.4954C68.522 52.896 68.2596 52.2354 68.1432 51.5137C68.0776 50.7801 67.9612 50.0583 67.7942 49.3486C67.6987 48.943 67.5466 48.524 67.3378 48.0916C67.129 47.6591 66.792 47.3639 66.3268 47.2059C66.6638 46.5915 66.8382 45.8549 66.8501 44.996C66.862 44.1371 66.7859 43.2454 66.6218 42.3209C66.5084 41.3844 66.3503 40.4853 66.1475 39.6234C65.9327 38.7109 65.8044 37.9385 65.7627 37.3062C66.0996 36.6918 66.5052 36.1416 66.9794 35.6555C67.4923 35.1067 68.1036 34.7488 68.8134 34.5818C69.726 34.367 70.4626 34.5414 71.0233 35.105C71.5721 35.618 72.0552 36.3068 72.4728 37.1717C72.8784 37.9858 73.2393 38.8373 73.5555 39.726C73.9224 40.6027 74.3488 41.2782 74.835 41.7524Z'
				strokeWidth='20'
				mask='url(#path-1-inside-1_24_28)'
			/>
			{/* LETTER E */}
			<motion.path
				initial='hidden'
				animate='visible'
				variants={thirdPathVariant}
				d='M157.708 4.43109C157.815 4.88737 157.897 5.34962 157.954 5.81784C158.061 6.27412 158.137 6.71102 158.182 7.12854C158.09 7.41782 157.809 7.59081 157.341 7.6475C156.924 7.69225 156.588 7.74446 156.335 7.80411C156.081 7.86377 155.865 7.96816 155.686 8.11729C155.546 8.20378 155.506 8.37377 155.565 8.62726C155.637 8.93145 155.71 9.12828 155.785 9.21774C155.367 9.2625 154.924 9.31322 154.456 9.3699C153.988 9.42659 153.546 9.36995 153.132 9.19998C152.458 9.51911 151.821 9.88298 151.222 10.2916C150.673 10.6883 150.13 11.1103 149.593 11.5576C149.057 12.005 148.489 12.433 147.889 12.8416C147.29 13.2502 146.641 13.5634 145.943 13.7811C145.606 14.3955 145.113 14.9129 144.463 15.3335C143.812 15.754 143.131 16.1551 142.418 16.5369C141.706 16.9187 141.055 17.3392 140.468 17.7985C139.869 18.2071 139.432 18.738 139.157 19.3911C138.066 19.755 137.067 20.2844 136.16 20.9793C135.254 21.6742 134.353 22.3945 133.458 23.1401C132.614 23.8738 131.739 24.5881 130.833 25.283C129.926 25.9779 128.908 26.5386 127.777 26.9652C127.545 27.3409 127.224 27.6839 126.816 27.9941C126.458 28.2923 126.074 28.5965 125.666 28.9067C125.245 29.1662 124.856 29.4451 124.498 29.7433C124.141 30.0416 123.877 30.398 123.707 30.8125L123.555 30.8483C123.352 30.896 123.188 30.8811 123.062 30.8036C122.937 30.726 122.773 30.7111 122.57 30.7589C122.418 30.7947 122.323 30.8439 122.284 30.9065C121.199 31.7505 120.119 32.6199 119.045 33.5147C117.972 34.4094 116.842 35.2907 115.655 36.1586C113.32 37.8318 110.953 39.4856 108.556 41.12C106.158 42.7544 103.915 44.5931 101.828 46.636C101.747 48.7952 101.78 50.9812 101.927 53.1941C102.061 55.3562 101.898 57.508 101.439 59.6493L102.28 63.2235C102 64.3061 101.921 65.4483 102.044 66.6501C102.166 67.852 102.352 68.9853 102.603 70.0499C102.698 70.4555 102.788 70.8357 102.871 71.1906C102.994 71.4829 103.097 71.8065 103.18 72.1613C104.555 71.4097 105.867 70.6194 107.117 69.7902C108.417 68.9492 109.729 68.1588 111.053 67.4191C111.703 66.9986 112.371 66.6541 113.057 66.3857C113.794 66.1053 114.487 65.7549 115.137 65.3343C115.659 65.051 116.194 64.711 116.743 64.3143C117.28 63.8669 117.797 63.4509 118.295 63.0661C119.661 62.0491 121.07 61.1022 122.523 60.2253C124.026 59.3365 125.584 58.5685 127.197 57.9213C127.609 57.3964 128.077 56.8849 128.602 56.3868C129.127 55.8888 129.693 55.5681 130.302 55.425C130.758 55.3176 131.156 55.3041 131.496 55.3846C132.239 54.6748 133.145 53.9799 134.216 53.2999C135.286 52.6199 136.341 52.2113 137.378 52.074C137.548 51.6595 137.799 51.3598 138.13 51.1748C138.449 50.9392 138.811 50.7737 139.217 50.6782C139.42 50.6305 139.603 50.6141 139.767 50.629C139.97 50.5813 140.198 50.5276 140.452 50.4679C140.875 49.9937 141.373 49.609 141.946 49.3137C142.518 49.0184 143.097 48.7485 143.681 48.5039C144.266 48.2594 144.819 47.9954 145.341 47.7121C145.902 47.3661 146.362 46.9366 146.723 46.4236C147.445 46.3073 148.05 46.3789 148.539 46.6383C149.079 46.8858 149.561 47.2272 149.984 47.6626C150.408 48.098 150.787 48.5707 151.121 49.0807C151.455 49.5906 151.833 50.0633 152.257 50.4987C152.251 50.9281 152.176 51.2935 152.033 51.5947C151.878 51.8452 151.698 52.1017 151.492 52.3641C151.286 52.6266 151.106 52.8831 150.951 53.1336C150.796 53.3841 150.735 53.6928 150.767 54.0596C148.993 54.4772 147.329 55.1364 145.775 56.0371C144.272 56.9259 142.787 57.8907 141.32 58.9316C139.903 59.9606 138.43 60.9761 136.9 61.9782C135.409 62.9177 133.82 63.6663 132.132 64.2241C131.938 64.5373 131.656 64.8176 131.286 65.0651L130.235 65.7138C129.904 65.8988 129.61 66.1284 129.354 66.4028C129.085 66.6265 128.917 66.9337 128.848 67.3243C128.508 67.2438 128.161 67.2453 127.806 67.3289C126.944 67.5317 126.161 67.9567 125.458 68.6039C124.754 69.2511 123.895 69.694 122.881 69.9326C122.475 70.0281 122.191 70.0684 122.026 70.0535C121.88 70.5694 121.578 70.9884 121.118 71.3105C120.71 71.6207 120.245 71.9175 119.723 72.2008C119.24 72.4215 118.768 72.6929 118.309 73.015C117.901 73.3252 117.629 73.7636 117.495 74.3303C117.331 74.3154 117.148 74.3318 116.945 74.3795L116.489 74.4869C115.677 74.6778 114.775 75.0506 113.782 75.6054C112.828 76.0975 112.212 76.7775 111.935 77.6453C111.505 77.6394 111.139 77.6722 110.834 77.7438C110.125 77.9109 109.527 78.2121 109.041 78.6475C108.543 79.0323 108.056 79.4677 107.582 79.9538L106.16 81.4122C105.686 81.8984 105.137 82.295 104.514 82.6023C103.637 84.7883 103.231 87.1578 103.297 89.7106C103.363 92.2634 103.579 94.8878 103.946 97.5838C104.364 100.268 104.776 102.926 105.181 105.56C105.599 108.244 105.76 110.747 105.665 113.071C106.16 113.81 106.591 114.618 106.958 115.495C107.325 116.372 107.666 117.255 107.982 118.143C108.31 119.083 108.638 120.022 108.967 120.962C109.295 121.901 109.687 122.772 110.143 123.574C110.647 124.579 111.35 125.404 112.25 126.048C113.214 126.731 113.973 127.569 114.527 128.562C114.793 128.553 115.052 128.518 115.306 128.459C115.622 128.438 115.932 128.392 116.236 128.32C118.061 127.891 119.575 127.16 120.777 126.128C122.029 125.084 123.138 123.887 124.105 122.536C125.083 121.235 125.986 119.845 126.815 118.366C127.707 116.926 128.705 115.594 129.808 114.371L131.253 114.031C131.512 113.542 131.715 113.04 131.861 112.524C132.007 112.008 132.185 111.511 132.393 111.034C132.602 110.557 132.873 110.118 133.207 109.719C133.553 109.37 134.019 109.073 134.603 108.829C134.576 108.032 134.794 107.366 135.256 106.829C135.718 106.292 135.955 105.594 135.967 104.735C136.081 104.762 136.213 104.758 136.365 104.722C136.771 104.626 137.051 104.453 137.206 104.203L138.097 102.87C138.407 102.369 138.742 101.862 139.103 101.349C139.527 100.875 139.925 100.406 140.297 99.944C141.517 98.5333 142.737 97.1227 143.956 95.712C145.188 94.352 146.251 92.8444 147.146 91.1892C147.208 91.228 147.29 91.2354 147.392 91.2115C147.797 91.1161 148.046 90.9237 148.139 90.6344C148.231 90.3451 148.568 90.1856 149.15 90.1557C149.347 89.6279 149.518 89.1059 149.664 88.59C149.798 88.0234 149.876 87.4433 149.897 86.8498L152.402 86.5813C153.237 86.4918 154.06 86.3516 154.871 86.1607C155.125 86.101 155.353 86.0473 155.556 85.9996C155.797 85.8893 156.007 85.7595 156.186 85.6104C157.021 86.4305 157.596 87.3922 157.909 88.4957C158.21 89.5484 158.587 90.5832 159.041 91.6002C158.939 91.624 158.863 91.6419 158.812 91.6539C158.801 91.6032 158.744 91.5897 158.643 91.6136C158.389 91.6733 158.159 91.8343 157.954 92.0968C157.787 92.2966 157.606 92.5531 157.412 92.8662L156.831 93.8057C156.637 94.1188 156.457 94.3753 156.29 94.5751C155.815 95.0613 155.304 95.5027 154.755 95.8993C154.219 96.3467 153.707 96.7881 153.221 97.2235C152.735 97.659 152.286 98.1392 151.875 98.6641C151.475 99.2397 151.201 99.8928 151.052 100.623C150.133 101.268 149.246 101.931 148.39 102.614C147.585 103.285 146.811 103.976 146.068 104.686C145.875 104.999 145.706 105.306 145.563 105.607C145.42 105.908 145.333 106.223 145.303 106.551C144.042 107.329 143.062 108.282 142.365 109.41C141.717 110.525 141.063 111.722 140.401 113.002L140.307 112.944C139.952 113.027 139.754 113.208 139.712 113.485C139.721 113.751 139.46 113.892 138.929 113.91C138.216 115.201 137.435 116.429 136.585 117.592C135.735 118.755 134.86 119.924 133.96 121.099C133.059 122.274 132.158 123.449 131.258 124.624C130.369 125.85 129.568 127.109 128.856 128.4C128.244 128.758 127.67 129.161 127.134 129.608C126.597 130.055 126.248 130.619 126.087 131.299L125.859 131.353C125.301 131.484 124.925 131.706 124.731 132.019C124.588 132.32 124.412 132.71 124.204 133.187C123.199 133.691 122.174 134.226 121.13 134.793C120.087 135.36 118.982 135.78 117.816 136.055C117.005 136.245 116.183 136.278 115.351 136.153C114.569 136.016 113.764 135.777 112.935 135.437C112.169 135.136 111.416 134.778 110.676 134.364C109.987 133.938 109.329 133.53 108.703 133.143C108.16 132.2 107.504 131.231 106.735 130.235C106.028 129.278 105.555 128.292 105.317 127.278C105.257 127.025 105.223 126.765 105.214 126.5C105.267 126.273 105.27 126.059 105.223 125.856C105.139 125.501 104.976 125.379 104.735 125.489C104.544 125.587 104.362 125.496 104.189 125.216C103.968 124.733 103.755 124.168 103.549 123.521C103.406 122.912 103.218 122.341 102.986 121.807C102.559 120.677 102.076 119.533 101.536 118.376C101.047 117.207 100.538 116.07 100.01 114.963C100.189 114.814 100.3 114.601 100.341 114.324C100.446 114.085 100.55 113.846 100.655 113.608C100.407 113.238 100.148 112.817 99.8761 112.346C99.6673 111.914 99.5033 111.444 99.384 110.937C99.1453 109.923 99.3466 109.073 99.9878 108.387C99.9042 108.032 99.7372 107.777 99.4867 107.622C99.2988 107.506 99.1571 107.245 99.0617 106.84C99.0378 106.738 98.9976 106.453 98.9409 105.985C98.923 105.454 98.8931 104.873 98.8513 104.24C98.8602 103.596 98.8498 102.983 98.8199 102.402C98.7901 101.82 98.7766 101.422 98.7796 101.208C98.5856 98.7919 98.3529 96.4389 98.0814 94.1485C97.798 91.8074 97.6159 89.4424 97.5353 87.0536C96.9329 86.7674 96.2022 86.6183 95.3433 86.6064C94.5232 86.5319 93.9133 86.3276 93.5136 85.9936C93.1766 85.6984 92.8665 85.2898 92.5831 84.768C92.2998 84.2461 92.1104 83.7823 92.0149 83.3768C91.6689 81.9065 91.9775 80.6032 92.9407 79.4669C93.892 78.2799 95.0089 77.4553 96.2912 76.993C96.5327 75.0634 96.5908 73.1503 96.4654 71.2536C96.3788 69.2942 96.2162 67.3527 95.9775 65.4292L95.2436 59.5825C94.993 57.6082 94.8497 55.6354 94.8139 53.6641L94.3576 53.7715C93.3436 54.0102 92.3908 54.3949 91.4991 54.9258C90.6074 55.4567 89.6546 55.8414 88.6407 56.0801L88.4886 56.1159C86.7439 55.2958 85.6806 54.0746 85.2988 52.4523C85.0721 51.489 85.0482 50.478 85.2271 49.4193C85.9667 48.9242 86.6064 48.3456 87.1461 47.6835C87.6859 47.0214 88.2257 46.3593 88.7654 45.6973C89.3439 44.9725 89.9404 44.3239 90.5547 43.7512C91.169 43.1786 91.8952 42.7402 92.7332 42.4359C92.4886 40.9418 92.396 39.4119 92.4556 37.8462C92.5152 36.2805 92.372 34.7625 92.0259 33.2923C91.9544 32.9881 91.8574 32.6899 91.7351 32.3976C91.6635 32.0934 91.5413 31.8012 91.3683 31.5208C91.6158 30.981 91.7306 30.4457 91.7126 29.9149C91.7454 29.3721 91.6962 28.8219 91.5649 28.2642C91.4218 27.6558 91.2339 27.0847 91.0012 26.5509C90.8073 25.9544 90.5941 25.3893 90.3614 24.8555C90.77 24.5453 91.0772 24.259 91.2829 23.9966C91.4767 23.6834 91.6512 23.4016 91.8063 23.1511C92.012 22.8886 92.2745 22.6396 92.5936 22.404C92.9126 22.1683 93.4017 21.973 94.0608 21.8179C95.0241 21.5912 95.883 21.6031 96.6375 21.8535C97.4308 22.0414 98.1525 22.3798 98.8027 22.8689C99.4528 23.358 100.045 23.941 100.579 24.6179C101.163 25.2829 101.722 25.9539 102.256 26.6309C102.286 27.2124 102.154 27.6717 101.858 28.0087C101.563 28.3457 101.336 28.7468 101.178 29.2121C101.471 29.9994 101.757 30.7614 102.037 31.498C102.306 32.1839 102.485 32.9444 102.574 33.7794C103.141 33.9136 103.652 33.927 104.109 33.8196C104.869 33.6406 105.506 33.2767 106.019 32.728C106.582 32.1673 106.907 31.5022 106.994 30.7328L107.146 30.697C107.298 30.6612 107.437 30.6821 107.562 30.7596C107.738 30.8252 107.927 30.8341 108.13 30.7864L108.434 30.7148C108.873 30.0766 109.392 29.5532 109.991 29.1446C110.579 28.6853 111.197 28.2454 111.847 27.8248C112.498 27.4043 113.122 26.9897 113.722 26.5811C114.36 26.1099 114.93 25.5745 115.431 24.9751C115.77 25.0556 116.118 25.0541 116.473 24.9706C116.98 24.8512 117.438 24.6365 117.846 24.3263C118.305 24.0042 118.739 23.6881 119.148 23.3779C119.544 23.017 119.972 22.6755 120.432 22.3534C120.942 22.0194 121.501 21.7808 122.109 21.6376C122.211 21.6137 122.343 21.6092 122.507 21.6241C122.659 21.5883 122.786 21.5585 122.888 21.5347C123.242 21.4511 123.415 21.2767 123.406 21.0112C123.397 20.7458 123.344 20.5177 123.245 20.3268C124.772 19.5394 126.059 18.755 127.106 17.9736C128.191 17.1296 129.386 16.1797 130.689 15.1239C130.677 15.0732 130.722 15.0359 130.823 15.012C130.975 14.9762 131.094 15.0284 131.181 15.1686C131.267 15.3087 131.323 15.4295 131.346 15.5309C131.615 15.3072 131.707 15.0179 131.624 14.6631C131.591 14.2962 131.646 13.9622 131.789 13.661C132.004 13.664 132.289 13.6237 132.644 13.5402C133.1 13.4328 133.532 13.224 133.941 12.9138C134.4 12.5917 134.828 12.2502 135.225 11.8894C135.621 11.5285 136.024 11.193 136.433 10.8828C136.841 10.5726 137.274 10.3638 137.73 10.2564C138.135 10.161 138.489 10.1848 138.79 10.328C139.058 10.1043 139.315 9.8299 139.559 9.50482C139.792 9.12904 140.086 8.89939 140.441 8.81587C140.542 8.79201 140.624 8.79946 140.687 8.83822C140.8 8.86506 140.913 8.8919 141.027 8.91873C141.221 8.60558 141.401 8.3491 141.568 8.14928C141.786 7.93752 141.853 7.6542 141.769 7.29932C143.597 6.65505 145.226 5.8438 146.654 4.86554C148.121 3.82465 149.465 2.59887 150.684 1.18819C151.266 1.15834 151.828 1.1598 152.371 1.19258C152.952 1.16273 153.522 1.08218 154.08 0.950936C154.515 1.43703 154.925 1.92908 155.31 2.42711C155.695 2.92513 156.312 3.04737 157.162 2.79384C157.272 3.0354 157.363 3.30827 157.435 3.61246C157.557 3.90472 157.648 4.1776 157.708 4.43109Z'
				strokeWidth='10'
				mask='url(#path-1-inside-1_24_28)'
			/>
			{/* LETTER B */}
			<motion.path
				initial='hidden'
				animate='visible'
				variants={thirdPathVariant}
				d='M254.077 55.8306C254.232 56.4897 254.198 57.1398 253.974 57.781C253.738 58.3715 253.78 59.0038 254.099 59.6777C253.98 60.0803 253.767 60.4248 253.46 60.7111C253.203 60.9855 253.191 61.3896 253.424 61.9234C252.491 62.7317 251.669 63.6741 250.959 64.7507C250.288 65.7648 249.535 66.7713 248.7 67.7704C248.199 68.3699 247.745 68.8247 247.336 69.1349C246.966 69.3824 246.519 69.7552 245.994 70.2533L244.379 71.9175C243.625 72.5766 242.845 73.2417 242.04 73.9128C241.285 74.5719 240.637 75.3398 240.094 76.2167C239.041 76.5179 238.017 77.0533 237.021 77.8228C236.037 78.6429 235.085 79.3751 234.167 80.0194C233.797 80.2669 233.415 80.4637 233.022 80.6099C232.64 80.8067 232.27 81.0543 231.912 81.3525L230.821 82.1712C230.195 82.6932 229.442 83.2449 228.562 83.8265C227.694 84.4588 226.88 84.8644 226.119 85.0434C225.711 85.3536 225.414 85.7979 225.229 86.3765C223.687 87.3279 222.065 88.1645 220.362 88.8863C218.659 89.6081 217.049 90.4954 215.531 91.5483C215.033 91.933 214.528 92.3997 214.015 92.9485C213.564 93.536 213.004 93.882 212.333 93.9864C212.24 94.2757 212.21 94.6038 212.243 94.9706C212.276 95.3374 212.284 95.7102 212.266 96.0889L212.038 96.1426C211.835 96.1904 211.709 96.1128 211.662 95.91C211.665 95.6953 211.565 95.6118 211.362 95.6595C211.21 95.6953 211.114 95.7445 211.076 95.8072C210.452 96.1144 209.849 96.3903 209.264 96.6348C208.73 96.8675 208.108 97.0673 207.399 97.2344C206.993 97.3298 206.322 97.4342 205.386 97.5476C204.5 97.649 203.836 97.6714 203.395 97.6148C203.055 97.5343 202.736 97.3151 202.438 96.9573C202.139 96.5994 201.835 96.2162 201.525 95.8076C201.265 95.3871 201 94.9413 200.729 94.4701C200.52 94.0377 200.329 93.6813 200.156 93.401C200.177 92.8075 200.323 92.2916 200.594 91.8532C200.866 91.4148 201.037 90.8929 201.109 90.2874C201.553 90.1294 201.991 89.9459 202.424 89.7371C202.856 89.5284 203.307 89.3956 203.775 89.339C205.239 88.5128 206.703 87.6866 208.168 86.8605C209.694 86.0731 211.19 85.2663 212.654 84.4401C214.119 83.614 215.546 82.7431 216.935 81.8274C218.325 80.9118 219.634 79.8814 220.863 78.7361L222.46 78.3603C223.253 77.6385 224.166 76.969 225.197 76.3516C226.229 75.7342 227.005 74.9364 227.523 73.9582C229.113 73.2096 230.749 72.3163 232.431 71.2784C234.113 70.2404 235.407 68.9192 236.313 67.3147C237.05 67.0344 237.667 66.7018 238.165 66.3171C238.651 65.8816 239.112 65.4522 239.548 65.0286L240.836 63.6821C241.259 63.2079 241.777 62.7918 242.388 62.4339C242.698 61.9329 242.977 61.4125 243.225 60.8727C243.472 60.3329 243.813 59.8512 244.249 59.4277C243.906 58.6523 243.357 58.1394 242.603 57.8889C241.848 57.6384 241.152 57.294 240.513 56.8557L238.84 57.2494C237.331 56.7484 235.769 56.4742 234.152 56.4265C232.575 56.3162 230.991 56.1806 229.401 56.0197C229.288 55.9928 229.155 55.9973 229.003 56.0331C228.648 56.1166 228.45 56.2971 228.408 56.5744C228.417 56.8398 228.238 56.989 227.872 57.0218C227.344 56.825 226.82 56.7609 226.301 56.8295C225.771 56.8474 225.226 56.922 224.669 57.0532C223.959 57.2203 223.261 57.438 222.575 57.7065C221.928 57.9123 221.249 58.0987 220.54 58.2657C220.185 58.3493 219.824 58.4074 219.457 58.4403C219.09 58.4731 218.706 58.4299 218.303 58.3106L217.314 58.5432C216.25 58.7938 215.197 59.0951 214.156 59.447C213.154 59.7364 212.146 60.0003 211.132 60.239C210.574 60.3702 210.042 60.4955 209.535 60.6148C209.016 60.6834 208.491 60.7267 207.961 60.7446C207.015 61.5022 205.958 62.1255 204.789 62.6147C203.62 63.1038 202.388 63.5542 201.094 63.9658C199.85 64.3655 198.607 64.7652 197.363 65.1649C196.108 65.5139 194.921 65.927 193.802 66.4042C193.486 66.4251 193.176 66.4713 192.872 66.5429C192.607 66.5519 192.347 66.5862 192.094 66.6458C191.84 66.7055 191.567 66.7965 191.275 66.9187C191.021 66.9784 190.774 67.0634 190.532 67.1738C189.706 66.6191 188.776 66.303 187.741 66.2255C186.745 66.0854 185.779 66.072 184.842 66.1854C183.93 65.4906 183.194 64.754 182.637 63.9756C182.118 63.1347 181.676 62.1684 181.312 61.0769L181.617 61.0053C181.971 60.9218 182.082 60.7086 181.948 60.3656C181.864 60.0107 181.919 59.6767 182.113 59.3636C182.295 58.9997 182.577 58.7194 182.958 58.5225C183.379 58.263 183.774 58.0095 184.144 57.762C184.514 57.5144 184.852 57.2475 185.159 56.9612C185.505 56.6123 185.72 56.1604 185.803 55.6057L186.792 55.3731C186.995 55.3253 187.204 55.3029 187.418 55.3059C187.672 55.2463 187.892 55.2746 188.08 55.3909C188.235 55.1404 188.447 54.9033 188.716 54.6796C188.984 54.4559 189.227 54.2382 189.445 54.0264C189.713 53.8027 189.925 53.5656 190.08 53.3151C190.235 53.0646 190.29 52.7306 190.245 52.3131C190.332 52.4532 190.477 52.4994 190.679 52.4517C190.882 52.404 191.048 52.3115 191.176 52.1743C191.355 52.0252 191.577 51.9462 191.842 51.9372C191.929 51.1678 192.27 50.6861 192.867 50.4923C193.463 50.2984 193.979 49.9897 194.414 49.5662C194.722 49.2799 194.997 48.9742 195.242 48.6491C195.475 48.2733 195.739 47.9169 196.034 47.5799L199.773 43.0079L205.517 36.038C207.431 33.7147 209.426 31.5062 211.502 29.4126C211.532 29.0845 211.63 28.8206 211.797 28.6208C211.964 28.421 212.131 28.2211 212.298 28.0213C212.453 27.7708 212.558 27.5322 212.611 27.3055C212.716 27.067 212.695 26.7508 212.549 26.3572C213.223 26.0381 213.689 25.6339 213.949 25.1448C214.259 24.6438 214.512 24.1293 214.709 23.6015C214.894 23.0229 215.085 22.4697 215.282 21.9418C215.517 21.3513 215.884 20.8637 216.382 20.4789C216.296 20.3388 216.217 20.1166 216.145 19.8124C216.049 19.4068 215.979 18.9953 215.935 18.5777C215.941 18.1483 216.06 17.7457 216.292 17.3699C215.586 16.4126 214.621 15.8371 213.398 15.6433C212.163 15.3988 210.997 15.2184 209.9 15.1022L209.672 15.1559C209.418 15.2155 209.296 15.3781 209.305 15.6435C209.353 15.8463 209.262 16.0282 209.032 16.1893C208.173 16.1774 207.237 16.2907 206.223 16.5294C205.209 16.768 204.213 17.0827 203.235 17.4734C202.307 17.8522 201.324 18.1102 200.287 18.2475C200.182 18.486 200.052 18.7306 199.897 18.9811C199.793 19.2197 199.632 19.4449 199.414 19.6566C198.362 19.9579 197.333 20.3605 196.328 20.8646L193.313 22.3768L191.653 23.1686C191.423 23.3297 191.288 23.5489 191.246 23.8262C191.204 24.1036 191.194 24.4003 191.215 24.7165C190.899 24.7374 190.666 24.6583 190.517 24.4794C190.418 24.2885 190.205 24.1782 189.877 24.1484C188.878 25.1326 187.748 26.0139 186.486 26.7924C185.276 27.5589 184.251 28.549 183.413 29.7629C182.963 29.4408 182.408 29.3573 181.749 29.5124C181.192 29.6437 180.625 29.9643 180.049 30.4743C179.474 30.9843 179.176 31.536 179.155 32.1295C178.624 32.1474 178.232 32.1862 177.978 32.2459C177.421 32.3771 176.975 32.6426 176.641 33.0422C176.357 33.4299 176.086 33.8683 175.827 34.3574C175.555 34.7958 175.259 35.2402 174.937 35.6906C174.614 36.1409 174.155 36.463 173.559 36.6569C173.618 36.9104 173.684 37.1892 173.756 37.4934C173.866 37.735 173.957 38.0078 174.029 38.312C174.565 40.5934 174.976 42.9047 175.259 45.2458C175.531 47.5362 175.935 49.8221 176.472 52.1035C176.591 52.6105 176.736 53.1115 176.906 53.6065C177.064 54.0509 177.208 54.5519 177.34 55.1096C177.375 55.2617 177.326 55.621 177.192 56.1877C177.109 56.7424 177.046 57.1584 177.004 57.4358C177.338 57.9457 177.546 58.4855 177.626 59.0551C177.757 59.6128 178.009 60.1153 178.382 60.5626C178.021 61.0756 177.925 61.687 178.092 62.3967C178.163 62.7009 178.235 63.0051 178.306 63.3093C178.429 63.6016 178.526 63.8998 178.597 64.204L178.812 65.1166C178.898 66.1663 179.042 67.2295 179.242 68.3061C179.429 69.332 179.643 70.3519 179.881 71.3659C179.989 71.8222 180.174 72.608 180.436 73.7233C180.737 74.7761 181.1 75.9749 181.523 77.3199C181.935 78.6142 182.409 79.9473 182.946 81.3191C183.483 82.6909 184.047 83.9494 184.637 85.0946C185.267 86.1771 185.924 87.039 186.61 87.6801C187.296 88.3213 187.994 88.5583 188.704 88.3913C188.856 88.3555 189.027 88.2884 189.218 88.19C189.46 88.0796 189.557 87.923 189.509 87.7203C189.461 87.5175 189.369 87.3519 189.232 87.2237C189.145 87.0836 189.078 86.9121 189.03 86.7093L189.07 86.5393C189.524 86.6466 189.985 86.672 190.453 86.6153C190.972 86.5467 191.491 86.478 192.01 86.4094C192.528 86.3408 193.028 86.3035 193.508 86.2975C194 86.3422 194.471 86.5256 194.922 86.8477C194.814 87.301 194.814 87.7558 194.922 88.2121C195.065 88.8205 195.348 89.3423 195.772 89.7777C196.207 90.2638 196.541 90.7738 196.774 91.3076C195.882 91.8385 195.073 92.3768 194.345 92.9226C193.68 93.5072 193.003 94.041 192.314 94.5242C191.637 95.0581 190.898 95.5532 190.095 96.0095C189.305 96.5165 188.364 96.952 187.273 97.3159C186.456 97.0266 185.752 96.7642 185.161 96.5286C184.571 96.2931 183.833 96.226 182.947 96.3274C181.211 94.8632 179.65 93.1172 178.263 91.0893C176.888 89.1121 175.667 86.9917 174.599 84.7282C173.582 82.4528 172.691 80.1476 171.928 77.8125C171.203 75.4147 170.59 73.1512 170.089 71.0219C169.54 68.6898 169.073 66.3651 168.688 64.0479C168.342 61.668 168.047 59.2763 167.802 56.8726C167.737 56.1389 167.671 55.4053 167.605 54.6716C167.528 53.8873 167.456 53.1283 167.391 52.3947C167.432 52.1173 167.443 51.8206 167.422 51.5045C167.44 51.1257 167.419 50.8096 167.359 50.5561C167.156 49.6942 166.928 48.8383 166.675 47.9884C166.421 47.1385 166.199 46.3079 166.008 45.4967C165.71 44.2293 165.482 42.9186 165.323 41.5646C165.314 41.2992 165.313 40.9518 165.319 40.5223C165.376 40.0809 165.368 39.7081 165.296 39.404C165.201 38.9984 165.034 38.7434 164.795 38.639C164.557 38.5347 164.32 38.3229 164.084 38.0038C164.117 37.4611 164.13 36.9496 164.124 36.4694C164.106 35.9386 164.038 35.4197 163.918 34.9127C163.692 33.9494 163.317 33.1547 162.795 32.5284C162.739 31.1506 162.815 29.7683 163.023 28.3815C163.232 26.9948 163.893 25.8227 165.005 24.8653C166.031 24.6774 167.069 24.5402 168.118 24.4536C169.219 24.3552 170.233 24.5713 171.16 25.1021C171.468 24.8158 171.843 24.5936 172.288 24.4355L173.697 23.9434C174.192 23.7734 174.63 23.59 175.012 23.3931C175.382 23.1456 175.671 22.7832 175.88 22.306C176.846 21.8646 177.87 21.3292 178.953 20.6999C180.024 20.0199 180.93 19.325 181.673 18.6152L183.346 18.2214C183.641 17.8844 184.005 17.6115 184.437 17.4027L185.793 16.6825C186.264 16.411 186.684 16.1516 187.054 15.904C187.475 15.6445 187.77 15.3075 187.94 14.893L188.244 14.8214C189.41 14.547 190.491 14.025 191.487 13.2555C192.483 12.4861 193.466 11.7732 194.435 11.1171C194.665 10.956 195.003 10.6891 195.45 10.3163C195.948 9.93157 196.299 9.71534 196.502 9.66761C197.188 9.39917 197.885 9.18143 198.595 9.01439C199.293 8.79665 199.979 8.52821 200.653 8.20907C202.216 7.57377 203.747 6.91909 205.247 6.24502C206.786 5.50832 208.366 4.94907 209.989 4.56726C210.546 4.43601 211.059 4.34205 211.528 4.28536C212.035 4.16604 212.573 4.06611 213.143 3.98556C213.241 4.17642 213.409 4.32404 213.648 4.42841C213.875 4.48208 214.076 4.54171 214.252 4.60732C214.479 4.66099 214.692 4.77132 214.892 4.93832C215.08 5.05462 215.184 5.27083 215.205 5.58695C215.33 5.66448 215.443 5.69132 215.545 5.66746C215.697 5.63166 215.806 5.52578 215.871 5.34983C215.988 5.16194 216.173 5.03816 216.426 4.97851L216.806 4.88902C217.632 5.44368 218.427 5.97897 219.191 6.49486C219.993 6.94813 220.923 7.26421 221.982 7.4431C222.746 8.86859 223.579 10.2508 224.483 11.5898C225.387 12.9288 226.035 14.4349 226.429 16.1079C226.668 17.1219 226.748 18.1463 226.671 19.1811C226.045 19.7031 225.669 20.3801 225.544 21.2121C225.418 22.0442 225.313 22.8449 225.226 23.6144C223.974 24.6582 223.003 25.8765 222.314 27.2693C221.625 28.6621 220.911 30.0608 220.172 31.4655L218.955 31.7518C218.752 31.7996 218.618 31.9114 218.552 32.0874L218.047 33.0089C217.686 33.5219 217.274 34.0468 216.812 34.5836C216.401 35.1085 216.146 35.7303 216.047 36.4491C214.679 37.6808 213.384 39.002 212.165 40.4127C210.996 41.8115 209.889 43.249 208.846 44.7252C208.395 45.3128 207.963 45.9764 207.548 46.716C207.122 47.4049 206.678 48.0178 206.215 48.5546C205.971 48.8797 205.67 49.1914 205.312 49.4896C204.993 49.7252 204.711 50.0056 204.466 50.3307C203.927 50.9927 203.443 51.6683 203.017 52.3572C202.579 52.9954 202.109 53.6143 201.608 54.2137C203.866 53.5754 206.16 52.9818 208.492 52.433C210.813 51.8334 213.107 51.2398 215.377 50.6522C216.543 50.3778 217.678 50.084 218.781 49.7708C219.873 49.4069 221.001 49.0877 222.168 48.8133C222.37 48.7656 222.56 48.7745 222.736 48.8401C222.9 48.855 223.089 48.864 223.304 48.8669C224.201 48.8162 225.004 48.8147 225.711 48.8624C228.251 48.7459 230.78 48.5788 233.297 48.361C235.814 48.1431 238.334 48.1654 240.858 48.4277C241.576 48.5261 242.123 48.6916 242.499 48.9242C242.926 49.1448 243.552 49.0777 244.378 48.7228C245.255 49.2655 246.147 49.6442 247.053 49.8589C248.011 50.0617 248.956 50.2137 249.889 50.3151C250.787 51.1739 251.622 51.994 252.395 52.7753C253.218 53.5447 253.779 54.5631 254.077 55.8306Z'
				strokeWidth='10'
				mask='url(#path-1-inside-1_24_28)'
			/>
		</SvgIcon>
	)
}
