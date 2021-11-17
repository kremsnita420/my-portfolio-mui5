import { useContext } from 'react'
import Box from '@mui/material/Box'
import Layout from '../components/Layout'
import { Store } from '../src/StoreProvider'
import classes from '../styles/index.module.css'
import { motion } from 'framer-motion'
import { Typography } from '@mui/material'

export default function HomePage() {
	//fetch from store provider
	const { state } = useContext(Store)
	const { darkMode } = state

	const mainPathVariant = {
		transition: {
			duration: 5,
			ease: 'easeInOut',
		},
		variants: {
			visible: {
				pathLength: 0,
			},
			hidden: {
				pathLength: 1,
			},
		},
	}
	const secPathVariant = {
		transition: {
			duration: 5,
			ease: 'easeIn',
		},
		variants: {
			visible: {
				scale: '100%',
				opacity: 1,
				pathLength: 1,
			},
			hidden: {
				scale: '0%',
				opacity: 0,
				pathLength: 0,
			},
		},
	}
	const thirdPathVariant = {
		transition: {
			delay: 5,
			duration: 6,
			ease: 'easeIn',
		},
		variants: {
			visible: {
				pathLength: 1,
			},
			hidden: {
				pathLength: 0,
			},
		},
	}

	return (
		<Layout>
			<Box sx={{ marginTop: '4rem', maxWidth: 'md' }}>
				{/* fullstack svg */}
				<svg
					id={classes.logo3}
					width='450'
					height='87'
					viewBox='0 0 450 87'
					xmlns='http://www.w3.org/2000/svg'>
					<motion.path
						{...thirdPathVariant}
						animate='visible'
						initial='hidden'
						fillRule='evenodd'
						clipRule='evenodd'
						d='M0.200012 87V6.99999H47.4V26.3H19.5V33.6H39.3549L34.9969 52.9H19.5V87H0.200012ZM14.5 47.9H31L33.1 38.6H14.5V21.3H42.4V12H5.20001V82H14.5V47.9ZM57.5703 27H95.7703V87H69.8703C66.5424 87 63.5173 85.818 61.1348 83.4355C58.7523 81.053 57.5703 78.028 57.5703 74.7V27ZM81.3703 72.6H75.5703C74.637 72.6 73.8037 72.2333 73.0703 71.5C72.337 70.7667 71.9703 69.9333 71.9703 69V32H62.5703V74.7C62.5703 76.7667 63.2703 78.5 64.6703 79.9C66.0703 81.3 67.8037 82 69.8703 82H90.7703V32H81.3703V72.6ZM107.766 87V5.29376L127.166 0.959722V87H107.766ZM122.166 82H112.766V9.29999L122.166 7.2V82ZM139.113 87V5.29376L158.513 0.959722V87H139.113ZM153.513 82H144.113V9.29999L153.513 7.2V82ZM170.461 66.2V46.8H208.561V66.2H170.461ZM224.082 83.3944L224.042 83.3524C221.768 80.9699 220.559 78.0055 220.559 74.7V61.4H222.698C221.295 59.3506 220.559 56.9791 220.559 54.4V39.3C220.559 36.0083 221.761 33.0474 224.082 30.7055C226.405 28.2929 229.391 27 232.759 27H246.459C249.827 27 252.813 28.2933 255.136 30.7066C257.457 33.0484 258.659 36.0088 258.659 39.3V52.6H256.477C257.918 54.6367 258.659 57.0164 258.659 59.6V75.1893L258.655 75.2785C258.541 78.4895 257.229 81.3004 254.994 83.5355L254.951 83.5786L254.907 83.6207C252.577 85.8395 249.676 87 246.459 87H232.759C229.448 87 226.471 85.7839 224.123 83.4355L224.082 83.3944ZM253.659 47.6V39.3C253.659 37.3 252.959 35.6 251.559 34.2C250.159 32.7333 248.459 32 246.459 32H232.759C230.759 32 229.059 32.7333 227.659 34.2C226.259 35.6 225.559 37.3 225.559 39.3V54.4C225.559 56.4 226.259 58.1333 227.659 59.6C228.529 60.4709 229.516 61.0709 230.619 61.4C231.29 61.6 232.003 61.7 232.759 61.7H240.659C241.659 61.7 242.492 62.0667 243.159 62.8C243.892 63.4667 244.259 64.3 244.259 65.3V69C244.259 70 243.892 70.8667 243.159 71.6C242.492 72.2667 241.659 72.6 240.659 72.6H238.559C237.559 72.6 236.692 72.2667 235.959 71.6C235.225 70.8667 234.859 70 234.859 69V66.4H225.559V74.7C225.559 76.7 226.259 78.4333 227.659 79.9C229.059 81.3 230.759 82 232.759 82H246.459C248.392 82 250.059 81.3333 251.459 80C252.859 78.6 253.592 76.9667 253.659 75.1V59.6C253.659 57.6 252.959 55.9 251.559 54.5C250.676 53.5749 249.673 52.9416 248.552 52.6C247.895 52.4 247.197 52.3 246.459 52.3H238.559C237.559 52.3 236.692 51.9667 235.959 51.3C235.225 50.5667 234.859 49.7 234.859 48.7V45C234.859 44 235.225 43.1667 235.959 42.5C236.692 41.7667 237.559 41.4 238.559 41.4H240.659C241.659 41.4 242.492 41.7667 243.159 42.5C243.892 43.1667 244.259 44 244.259 45V47.6H253.659ZM270.656 87V5.19376L290.056 0.859723V27H303.262L298.721 46.4H290.056V87H270.656ZM285.056 41.4H294.756L296.956 32H285.056V7.1L275.656 9.19999V82H285.056V41.4ZM313.52 83.4766L313.479 83.4355C311.096 81.053 309.914 78.028 309.914 74.7V59.6C309.914 56.2891 311.13 53.3128 313.479 50.9645C315.844 48.5989 318.834 47.3 322.214 47.3H328.714V46.4H312.974L317.308 27H335.814C339.163 27 342.133 28.278 344.45 30.6638C346.836 32.981 348.114 35.9513 348.114 39.3V87H322.214C318.909 87 315.944 85.791 313.562 83.5168L313.52 83.4766ZM340.914 34.2C339.514 32.7333 337.814 32 335.814 32H321.314L319.214 41.4H330.014C331.081 41.4 331.947 41.7667 332.614 42.5C333.347 43.1667 333.714 44 333.714 45V48.7C333.714 49.7 333.347 50.5667 332.614 51.3C331.947 51.9667 331.081 52.3 330.014 52.3H322.214C320.214 52.3 318.481 53.0333 317.014 54.5C315.614 55.9 314.914 57.6 314.914 59.6V74.7C314.914 76.7667 315.614 78.5 317.014 79.9C318.481 81.3 320.214 82 322.214 82H343.114V39.3C343.114 37.3 342.381 35.6 340.914 34.2ZM333.714 72.6H327.914C326.914 72.6 326.047 72.2667 325.314 71.6C324.647 70.8667 324.314 70 324.314 69V65.3C324.314 64.3 324.647 63.4667 325.314 62.8C326.047 62.0667 326.914 61.7 327.914 61.7H333.714V72.6ZM362.656 83.3944L362.616 83.3524C360.342 80.9699 359.133 78.0055 359.133 74.7V39.3C359.133 36.0082 360.335 33.0473 362.657 30.7053C365.015 28.2567 368.049 27 371.433 27H385.033C388.381 27 391.352 28.278 393.669 30.6638C396.055 32.981 397.333 35.9513 397.333 39.3V55.2H378.533V58.8H397.333V74.7C397.333 78.08 396.034 81.07 393.668 83.4355C391.32 85.7839 388.344 87 385.033 87H371.433C368.105 87 365.08 85.818 362.697 83.4355L362.656 83.3944ZM374.533 71.6C373.866 70.8667 373.533 70 373.533 69V45C373.533 44 373.866 43.1667 374.533 42.5C375.266 41.7667 376.133 41.4 377.133 41.4H379.233C380.233 41.4 381.099 41.7667 381.833 42.5C382.566 43.1667 382.933 44 382.933 45V50.2H392.333V39.3C392.333 37.3 391.599 35.6 390.133 34.2C388.733 32.7333 387.033 32 385.033 32H371.433C369.366 32 367.633 32.7333 366.233 34.2C364.833 35.6 364.133 37.3 364.133 39.3V74.7C364.133 76.7 364.833 78.4333 366.233 79.9C367.633 81.3 369.366 82 371.433 82H385.033C387.033 82 388.733 81.3 390.133 79.9C391.599 78.4333 392.333 76.7 392.333 74.7V63.8H382.933V69C382.933 70 382.566 70.8667 381.833 71.6C381.099 72.2667 380.233 72.6 379.233 72.6H377.133C376.133 72.6 375.266 72.2667 374.533 71.6ZM409.328 87V5.13509L428.728 0.594666V29.4954L429.666 27H449.75L438.47 57L449.75 87H429.657L428.428 83.7064L427.2 87H409.328ZM428.428 69.4L433.128 82H442.528L433.128 57L442.528 32H433.128L423.728 57V6.89999L414.328 9.09999V82H423.728L428.428 69.4ZM175.461 61.2H203.561V51.8H175.461V61.2Z'
					/>
				</svg>
				{/* web svg */}
				<svg
					id={classes.logo2}
					width='325'
					height='125'
					viewBox='0 0 325 125'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<mask id='path-1-inside-1_4_5' fill='white'>
						<motion.path
							{...secPathVariant}
							animate='visible'
							initial='hidden'
							fillRule='evenodd'
							clipRule='evenodd'
							d='M24.8797 125L0.454559 0.199995H25.8926L37.032 56.855L48.1714 0.199995H71.6572L82.6505 56.7201L93.7634 0.199995H119.201L94.7763 125H70.6374L59.828 69.8842L49.0186 125H24.8797ZM59.828 43.904L74.752 120H90.66L113.128 5.2H97.876L82.624 82.772L67.536 5.2H52.284L37.032 82.772L21.78 5.2H6.52799L28.996 120H44.904L59.828 43.904ZM149.711 125V0.199995H220.719V25.288H174.963V43.824H206.722L201.02 69.076H174.963V99.748H220.719V125H149.711ZM169.963 104.748V64.076H197.023L200.467 48.824H169.963V20.288H215.719V5.2H154.711V120H215.719V104.748H169.963ZM253.645 125V0.0359955H300.301C305.007 0.0359955 309.151 1.76216 312.405 5.14924C315.587 8.35069 317.273 12.331 317.273 16.844V46.4098C319.05 47.5744 320.565 49.0988 321.811 50.9206C323.774 53.7886 324.817 57.0066 324.817 60.468V108.028C324.817 112.679 323.187 116.813 319.908 120.092C316.664 123.336 312.6 125 308.009 125H253.645ZM312.273 49.48V16.844C312.273 13.6733 311.125 10.94 308.829 8.644C306.533 6.23866 303.69 5.036 300.301 5.036H258.645V120H308.009C311.289 120 314.077 118.852 316.373 116.556C318.669 114.26 319.817 111.417 319.817 108.028V60.468C319.817 58.0627 319.106 55.8213 317.685 53.744C316.263 51.6667 314.459 50.2453 312.273 49.48ZM295.217 22.092C294.014 20.8893 292.593 20.288 290.953 20.288H274.061V48.824H290.953C292.593 48.824 294.014 48.2227 295.217 47.02C296.419 45.8173 297.021 44.4507 297.021 42.92V26.192C297.021 24.552 296.419 23.1853 295.217 22.092ZM279.061 43.824H290.953C291.213 43.824 291.377 43.7883 291.681 43.4845C291.905 43.2611 291.974 43.1219 291.993 43.0793C292.007 43.0468 292.021 43.0099 292.021 42.92V26.192C292.021 26.0885 292.011 26.0253 292.005 25.9938C291.999 25.9636 291.994 25.952 291.993 25.9507C291.993 25.9499 291.991 25.9457 291.986 25.9371C291.983 25.9327 291.979 25.927 291.974 25.9201C291.958 25.8989 291.923 25.855 291.853 25.7917L291.765 25.7117L291.681 25.6275C291.377 25.3237 291.213 25.288 290.953 25.288H279.061V43.824ZM299.141 69.1674L299.061 69.0794C298.983 68.9938 298.928 68.948 298.9 68.9268C298.893 68.9216 298.887 68.9176 298.883 68.9145C298.871 68.9133 298.852 68.912 298.825 68.912H279.061V99.748H298.825C298.981 99.748 299.033 99.723 299.034 99.7226C299.036 99.7218 299.099 99.6982 299.225 99.5725C299.461 99.337 299.565 99.1456 299.565 98.68V69.816C299.565 69.7261 299.551 69.6892 299.537 69.6567C299.518 69.6141 299.449 69.4749 299.225 69.2515L299.141 69.1674ZM274.061 104.748V63.912H298.825C300.355 63.912 301.667 64.5133 302.761 65.716C303.963 66.9187 304.565 68.2853 304.565 69.816V98.68C304.565 100.429 303.963 101.905 302.761 103.108C301.667 104.201 300.355 104.748 298.825 104.748H274.061Z'
						/>
					</mask>
					<motion.path
						{...secPathVariant}
						animate='visible'
						initial='hidden'
						fillRule='evenodd'
						clipRule='evenodd'
						d='M24.8797 125L0.454559 0.199995H25.8926L37.032 56.855L48.1714 0.199995H71.6572L82.6505 56.7201L93.7634 0.199995H119.201L94.7763 125H70.6374L59.828 69.8842L49.0186 125H24.8797ZM59.828 43.904L74.752 120H90.66L113.128 5.2H97.876L82.624 82.772L67.536 5.2H52.284L37.032 82.772L21.78 5.2H6.52799L28.996 120H44.904L59.828 43.904ZM149.711 125V0.199995H220.719V25.288H174.963V43.824H206.722L201.02 69.076H174.963V99.748H220.719V125H149.711ZM169.963 104.748V64.076H197.023L200.467 48.824H169.963V20.288H215.719V5.2H154.711V120H215.719V104.748H169.963ZM253.645 125V0.0359955H300.301C305.007 0.0359955 309.151 1.76216 312.405 5.14924C315.587 8.35069 317.273 12.331 317.273 16.844V46.4098C319.05 47.5744 320.565 49.0988 321.811 50.9206C323.774 53.7886 324.817 57.0066 324.817 60.468V108.028C324.817 112.679 323.187 116.813 319.908 120.092C316.664 123.336 312.6 125 308.009 125H253.645ZM312.273 49.48V16.844C312.273 13.6733 311.125 10.94 308.829 8.644C306.533 6.23866 303.69 5.036 300.301 5.036H258.645V120H308.009C311.289 120 314.077 118.852 316.373 116.556C318.669 114.26 319.817 111.417 319.817 108.028V60.468C319.817 58.0627 319.106 55.8213 317.685 53.744C316.263 51.6667 314.459 50.2453 312.273 49.48ZM295.217 22.092C294.014 20.8893 292.593 20.288 290.953 20.288H274.061V48.824H290.953C292.593 48.824 294.014 48.2227 295.217 47.02C296.419 45.8173 297.021 44.4507 297.021 42.92V26.192C297.021 24.552 296.419 23.1853 295.217 22.092ZM279.061 43.824H290.953C291.213 43.824 291.377 43.7883 291.681 43.4845C291.905 43.2611 291.974 43.1219 291.993 43.0793C292.007 43.0468 292.021 43.0099 292.021 42.92V26.192C292.021 26.0885 292.011 26.0253 292.005 25.9938C291.999 25.9636 291.994 25.952 291.993 25.9507C291.993 25.9499 291.991 25.9457 291.986 25.9371C291.983 25.9327 291.979 25.927 291.974 25.9201C291.958 25.8989 291.923 25.855 291.853 25.7917L291.765 25.7117L291.681 25.6275C291.377 25.3237 291.213 25.288 290.953 25.288H279.061V43.824ZM299.141 69.1674L299.061 69.0794C298.983 68.9938 298.928 68.948 298.9 68.9268C298.893 68.9216 298.887 68.9176 298.883 68.9145C298.871 68.9133 298.852 68.912 298.825 68.912H279.061V99.748H298.825C298.981 99.748 299.033 99.723 299.034 99.7226C299.036 99.7218 299.099 99.6982 299.225 99.5725C299.461 99.337 299.565 99.1456 299.565 98.68V69.816C299.565 69.7261 299.551 69.6892 299.537 69.6567C299.518 69.6141 299.449 69.4749 299.225 69.2515L299.141 69.1674ZM274.061 104.748V63.912H298.825C300.355 63.912 301.667 64.5133 302.761 65.716C303.963 66.9187 304.565 68.2853 304.565 69.816V98.68C304.565 100.429 303.963 101.905 302.761 103.108C301.667 104.201 300.355 104.748 298.825 104.748H274.061Z'
						strokeWidth='10'
						mask='url(#path-1-inside-1_4_5)'
					/>
				</svg>

				{/* developer svg */}
				<svg
					id={classes.logo}
					width='100%'
					height='100%'
					viewBox='0 0 762 114'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<mask
						id='path-1-outside-1_1_7'
						maskUnits='userSpaceOnUse'
						x='0.0880127'
						y='0.47998'
						width='762'
						height='113'
						fill='black'>
						<rect
							fill='white'
							x='0.0880127'
							y='0.47998'
							width='762'
							height='113'
						/>
						{/* OUTLINE LINES */}
						<motion.path
							{...mainPathVariant}
							animate='visible'
							initial='hidden'
							d='M36.336 6.63198C47.28 6.63198 56.736 8.69598 64.704 12.824C72.768 16.856 78.912 22.664 83.136 30.248C87.456 37.832 89.616 46.76 89.616 57.032C89.616 67.304 87.456 76.232 83.136 83.816C78.912 91.304 72.768 97.064 64.704 101.096C56.736 105.032 47.28 107 36.336 107H5.08801V6.63198H36.336ZM36.336 96.2C49.296 96.2 59.184 92.792 66 85.976C72.816 79.064 76.224 69.416 76.224 57.032C76.224 44.552 72.768 34.808 65.856 27.8C59.04 20.792 49.2 17.288 36.336 17.288H18.192V96.2H36.336Z'
						/>
						<motion.path
							{...mainPathVariant}
							animate='visible'
							initial='hidden'
							d='M120.005 17.288V50.84H156.581V61.64H120.005V96.2H160.901V107H106.901V6.48798H160.901V17.288H120.005Z'
						/>
						<motion.path
							{...mainPathVariant}
							animate='visible'
							initial='hidden'
							d='M263.673 6.63198L225.801 107H210.681L172.809 6.63198H186.777L218.313 93.176L249.849 6.63198H263.673Z'
						/>
						<motion.path
							{...mainPathVariant}
							animate='visible'
							initial='hidden'
							d='M291.145 17.288V50.84H327.721V61.64H291.145V96.2H332.041V107H278.041V6.48798H332.041V17.288H291.145Z'
						/>
						<motion.path
							{...mainPathVariant}
							animate='visible'
							initial='hidden'
							d='M364.973 96.344H400.109V107H351.869V6.63198H364.973V96.344Z'
						/>
						<motion.path
							{...mainPathVariant}
							animate='visible'
							initial='hidden'
							d='M459.53 108.008C450.218 108.008 441.722 105.848 434.042 101.528C426.362 97.112 420.266 91.016 415.754 83.24C411.338 75.368 409.129 66.536 409.129 56.744C409.129 46.952 411.338 38.168 415.754 30.392C420.266 22.52 426.362 16.424 434.042 12.104C441.722 7.68798 450.218 5.47998 459.53 5.47998C468.938 5.47998 477.481 7.68798 485.161 12.104C492.841 16.424 498.89 22.472 503.306 30.248C507.722 38.024 509.93 46.856 509.93 56.744C509.93 66.632 507.722 75.464 503.306 83.24C498.89 91.016 492.841 97.112 485.161 101.528C477.481 105.848 468.938 108.008 459.53 108.008ZM459.53 96.632C466.538 96.632 472.825 95 478.393 91.736C484.057 88.472 488.474 83.816 491.642 77.768C494.906 71.72 496.538 64.712 496.538 56.744C496.538 48.68 494.906 41.672 491.642 35.72C488.474 29.672 484.106 25.016 478.538 21.752C472.97 18.488 466.634 16.856 459.53 16.856C452.426 16.856 446.09 18.488 440.522 21.752C434.954 25.016 430.537 29.672 427.273 35.72C424.105 41.672 422.522 48.68 422.522 56.744C422.522 64.712 424.105 71.72 427.273 77.768C430.537 83.816 434.954 88.472 440.522 91.736C446.186 95 452.522 96.632 459.53 96.632Z'
						/>
						<motion.path
							{...mainPathVariant}
							animate='visible'
							initial='hidden'
							d='M594.333 36.008C594.333 44.36 591.453 51.32 585.693 56.888C580.029 62.36 571.341 65.096 559.629 65.096H540.333V107H527.229V6.63198H559.629C570.957 6.63198 579.549 9.36798 585.405 14.84C591.357 20.312 594.333 27.368 594.333 36.008ZM559.629 54.296C566.925 54.296 572.301 52.712 575.757 49.544C579.213 46.376 580.941 41.864 580.941 36.008C580.941 23.624 573.837 17.432 559.629 17.432H540.333V54.296H559.629Z'
						/>
						<motion.path
							{...mainPathVariant}
							animate='visible'
							initial='hidden'
							d='M623.723 17.288V50.84H660.299V61.64H623.723V96.2H664.619V107H610.619V6.48798H664.619V17.288H623.723Z'
						/>
						<motion.path
							{...mainPathVariant}
							animate='visible'
							initial='hidden'
							d='M737.295 107L713.391 65.96H697.551V107H684.447V6.63198H716.847C724.431 6.63198 730.815 7.92798 735.999 10.52C741.279 13.112 745.215 16.616 747.807 21.032C750.399 25.448 751.695 30.488 751.695 36.152C751.695 43.064 749.679 49.16 745.647 54.44C741.711 59.72 735.759 63.224 727.791 64.952L752.991 107H737.295ZM697.551 55.448H716.847C723.951 55.448 729.279 53.72 732.831 50.264C736.383 46.712 738.159 42.008 738.159 36.152C738.159 30.2 736.383 25.592 732.831 22.328C729.375 19.064 724.047 17.432 716.847 17.432H697.551V55.448Z'
						/>
					</mask>
					{/* FILL LINES */}
					<motion.path
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 5, delay: 0 }}
						d='M36.336 6.63198C47.28 6.63198 56.736 8.69598 64.704 12.824C72.768 16.856 78.912 22.664 83.136 30.248C87.456 37.832 89.616 46.76 89.616 57.032C89.616 67.304 87.456 76.232 83.136 83.816C78.912 91.304 72.768 97.064 64.704 101.096C56.736 105.032 47.28 107 36.336 107H5.08801V6.63198H36.336ZM36.336 96.2C49.296 96.2 59.184 92.792 66 85.976C72.816 79.064 76.224 69.416 76.224 57.032C76.224 44.552 72.768 34.808 65.856 27.8C59.04 20.792 49.2 17.288 36.336 17.288H18.192V96.2H36.336Z'
						stroke='#027955'
						strokeWidth='10'
						mask='url(#path-1-outside-1_1_7)'
					/>
					<motion.path
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 5, delay: 0.5 }}
						d='M120.005 17.288V50.84H156.581V61.64H120.005V96.2H160.901V107H106.901V6.48798H160.901V17.288H120.005Z'
						stroke='#027955'
						strokeWidth='10'
						mask='url(#path-1-outside-1_1_7)'
					/>
					<motion.path
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 5, delay: 1 }}
						d='M263.673 6.63198L225.801 107H210.681L172.809 6.63198H186.777L218.313 93.176L249.849 6.63198H263.673Z'
						stroke='#027955'
						strokeWidth='10'
						mask='url(#path-1-outside-1_1_7)'
					/>
					<motion.path
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 5, delay: 1.5 }}
						delay='5s'
						d='M291.145 17.288V50.84H327.721V61.64H291.145V96.2H332.041V107H278.041V6.48798H332.041V17.288H291.145Z'
						stroke='#027955'
						strokeWidth='10'
						mask='url(#path-1-outside-1_1_7)'
					/>
					<motion.path
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 5, delay: 2 }}
						d='M364.973 96.344H400.109V107H351.869V6.63198H364.973V96.344Z'
						stroke='#027955'
						strokeWidth='10'
						mask='url(#path-1-outside-1_1_7)'
					/>
					<motion.path
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 5, delay: 2.5 }}
						d='M459.53 108.008C450.218 108.008 441.722 105.848 434.042 101.528C426.362 97.112 420.266 91.016 415.754 83.24C411.338 75.368 409.129 66.536 409.129 56.744C409.129 46.952 411.338 38.168 415.754 30.392C420.266 22.52 426.362 16.424 434.042 12.104C441.722 7.68798 450.218 5.47998 459.53 5.47998C468.938 5.47998 477.481 7.68798 485.161 12.104C492.841 16.424 498.89 22.472 503.306 30.248C507.722 38.024 509.93 46.856 509.93 56.744C509.93 66.632 507.722 75.464 503.306 83.24C498.89 91.016 492.841 97.112 485.161 101.528C477.481 105.848 468.938 108.008 459.53 108.008ZM459.53 96.632C466.538 96.632 472.825 95 478.393 91.736C484.057 88.472 488.474 83.816 491.642 77.768C494.906 71.72 496.538 64.712 496.538 56.744C496.538 48.68 494.906 41.672 491.642 35.72C488.474 29.672 484.106 25.016 478.538 21.752C472.97 18.488 466.634 16.856 459.53 16.856C452.426 16.856 446.09 18.488 440.522 21.752C434.954 25.016 430.537 29.672 427.273 35.72C424.105 41.672 422.522 48.68 422.522 56.744C422.522 64.712 424.105 71.72 427.273 77.768C430.537 83.816 434.954 88.472 440.522 91.736C446.186 95 452.522 96.632 459.53 96.632Z'
						stroke='#027955'
						strokeWidth='10'
						mask='url(#path-1-outside-1_1_7)'
					/>
					<motion.path
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 5, delay: 3 }}
						d='M594.333 36.008C594.333 44.36 591.453 51.32 585.693 56.888C580.029 62.36 571.341 65.096 559.629 65.096H540.333V107H527.229V6.63198H559.629C570.957 6.63198 579.549 9.36798 585.405 14.84C591.357 20.312 594.333 27.368 594.333 36.008ZM559.629 54.296C566.925 54.296 572.301 52.712 575.757 49.544C579.213 46.376 580.941 41.864 580.941 36.008C580.941 23.624 573.837 17.432 559.629 17.432H540.333V54.296H559.629Z'
						stroke='#027955'
						strokeWidth='10'
						mask='url(#path-1-outside-1_1_7)'
					/>
					<motion.path
						{...mainPathVariant}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 5, delay: 3.5 }}
						d='M623.723 17.288V50.84H660.299V61.64H623.723V96.2H664.619V107H610.619V6.48798H664.619V17.288H623.723Z'
						stroke='#027955'
						strokeWidth='10'
						mask='url(#path-1-outside-1_1_7)'
					/>
					<motion.path
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 5, delay: 4 }}
						d='M737.295 107L713.391 65.96H697.551V107H684.447V6.63198H716.847C724.431 6.63198 730.815 7.92798 735.999 10.52C741.279 13.112 745.215 16.616 747.807 21.032C750.399 25.448 751.695 30.488 751.695 36.152C751.695 43.064 749.679 49.16 745.647 54.44C741.711 59.72 735.759 63.224 727.791 64.952L752.991 107H737.295ZM697.551 55.448H716.847C723.951 55.448 729.279 53.72 732.831 50.264C736.383 46.712 738.159 42.008 738.159 36.152C738.159 30.2 736.383 25.592 732.831 22.328C729.375 19.064 724.047 17.432 716.847 17.432H697.551V55.448Z'
						stroke='#027955'
						strokeWidth='10'
						mask='url(#path-1-outside-1_1_7)'
					/>
				</svg>

				{/* <Typography variant='h1' component='h1'>
					Fullstack, Self-Thought
				</Typography> */}
			</Box>
		</Layout>
	)
}
