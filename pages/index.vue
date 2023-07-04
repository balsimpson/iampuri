<template>
	<div>
		<div class="flex items-center justify-between max-w-4xl mx-auto">
			<img src="/iampuri_logo_op1.png" alt="" class="h-auto w-36" />
			<!-- <div class="px-6">About Us</div> -->
		</div>
		<!-- <AppHero /> -->
		<div
			class="flex flex-wrap items-center justify-center max-w-5xl px-12 mx-auto"
		>
			<!-- <ImgInteractive /> -->
			<div class="w-full lg:max-w-lg md:w-1/2 rounded-xl">
				<div>
					<div class="relative w-full max-w-lg mx-auto">
						<!-- <div
							class="absolute top-0 bg-red-300 rounded-full -right-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-morph ">
						</div> -->

						<!-- <div
							class="absolute w-full h-full delay-500 rounded-full -right-10 -top-6 bg-sky-300 mix-blend-multiply filter opacity-70 animate-morph">
						</div>
						<div
							class="absolute w-full h-full rounded-full -left-10 -bottom-6 bg-sky-700 mix-blend-multiply filter opacity-70 animate-morph">
						</div> -->

						<svg
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 500 500"
							width="100%"
							id="blobSvg"
							style="opacity: 1"
							class="absolute -bottom-16 -right-4"
						>
							<defs>
								<linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
									<stop
										offset="0%"
										style="stop-color: rgb(32, 166, 223)"
									></stop>
									<stop
										offset="100%"
										style="stop-color: rgb(48, 249, 253)"
									></stop>
								</linearGradient>
							</defs>
							<path id="blob" fill="url(#gradient)" style="opacity: 0.64">
								<animate
									attributeName="d"
									dur="13.9s"
									repeatCount="indefinite"
									values="M395.5,320Q390,390,320,400Q250,410,172,408Q94,406,59,328Q24,250,70.5,183.5Q117,117,183.5,108Q250,99,335,89.5Q420,80,410.5,165Q401,250,395.5,320Z;M409.06419,322.5266Q395.0532,395.0532,322.5266,445.11739Q250,495.18159,163.51944,459.07135Q77.03888,422.96112,82.39949,336.48056Q87.7601,250,115.64271,196.76266Q143.52532,143.52532,196.76266,76.83657Q250,10.14783,323.24578,56.82813Q396.49156,103.50844,409.78338,176.75422Q423.07519,250,409.06419,322.5266Z;M423.42552,332.41134Q414.82268,414.82268,332.41134,424.30554Q250,433.78841,170.96572,420.92848Q91.93144,408.06856,46.07152,329.03428Q0.21159,250,66.88003,191.77423Q133.54846,133.54846,191.77423,102.82861Q250,72.10876,305.00592,106.04846Q360.01185,139.98815,396.0201,194.99408Q432.02836,250,423.42552,332.41134Z;M408.24461,332.63257Q415.26513,415.26513,332.63257,434.71568Q250,454.16622,179.33614,422.74697Q108.67228,391.32772,65.87585,320.66386Q23.07942,250,63.27221,176.73251Q103.46501,103.46501,176.73251,63.02288Q250,22.58075,311.86507,74.4253Q373.73015,126.26985,387.47712,188.13493Q401.22409,250,408.24461,332.63257Z;M385.47259,309.13613Q368.27225,368.27225,309.13613,425.14983Q250,482.02741,183.02911,432.9846Q116.05821,383.94179,100.85787,316.97089Q85.65753,250,111.11302,193.28426Q136.56852,136.56852,193.28426,70.4846Q250,4.40068,303.89298,73.30736Q357.78596,142.21404,380.22944,196.10702Q402.67293,250,385.47259,309.13613Z;M395.5,320Q390,390,320,400Q250,410,172,408Q94,406,59,328Q24,250,70.5,183.5Q117,117,183.5,108Q250,99,335,89.5Q420,80,410.5,165Q401,250,395.5,320Z"
								></animate>
							</path>
							<path id="blob" fill="url(#gradient)" style="opacity: 0.64">
								<animate
									attributeName="d"
									dur="13.9s"
									repeatCount="indefinite"
									values="M421.63508,307.39005Q364.7801,364.7801,307.39005,427.43403Q250,490.08796,191.6822,428.36178Q133.3644,366.6356,70.9089,308.3178Q8.4534,250,54.21728,174.99058Q99.98115,99.98115,174.99058,81.49686Q250,63.01257,330.66021,75.84607Q411.32042,88.67958,444.90524,169.33979Q478.49006,250,421.63508,307.39005Z;M449.66467,329.57458Q409.14917,409.14917,329.57458,407.97733Q250,406.80549,191.3735,387.02924Q132.74701,367.25299,77.06026,308.6265Q21.3735,250,49.05191,163.36516Q76.73032,76.73032,163.36516,85.537Q250,94.34367,322.00775,100.16408Q394.01551,105.98449,442.09784,177.99225Q490.18018,250,449.66467,329.57458Z;M408.24461,332.63257Q415.26513,415.26513,332.63257,434.71568Q250,454.16622,179.33614,422.74697Q108.67228,391.32772,65.87585,320.66386Q23.07942,250,63.27221,176.73251Q103.46501,103.46501,176.73251,63.02288Q250,22.58075,311.86507,74.4253Q373.73015,126.26985,387.47712,188.13493Q401.22409,250,408.24461,332.63257Z;M423.42552,332.41134Q414.82268,414.82268,332.41134,424.30554Q250,433.78841,170.96572,420.92848Q91.93144,408.06856,46.07152,329.03428Q0.21159,250,66.88003,191.77423Q133.54846,133.54846,191.77423,102.82861Q250,72.10876,305.00592,106.04846Q360.01185,139.98815,396.0201,194.99408Q432.02836,250,423.42552,332.41134Z;M409.06419,322.5266Q395.0532,395.0532,322.5266,445.11739Q250,495.18159,163.51944,459.07135Q77.03888,422.96112,82.39949,336.48056Q87.7601,250,115.64271,196.76266Q143.52532,143.52532,196.76266,76.83657Q250,10.14783,323.24578,56.82813Q396.49156,103.50844,409.78338,176.75422Q423.07519,250,409.06419,322.5266Z;M421.63508,307.39005Q364.7801,364.7801,307.39005,427.43403Q250,490.08796,191.6822,428.36178Q133.3644,366.6356,70.9089,308.3178Q8.4534,250,54.21728,174.99058Q99.98115,99.98115,174.99058,81.49686Q250,63.01257,330.66021,75.84607Q411.32042,88.67958,444.90524,169.33979Q478.49006,250,421.63508,307.39005Z"
								></animate>
							</path>
							<path id="blob" fill="url(#gradient)" style="opacity: 0.64">
								<animate
									attributeName="d"
									dur="13.9s"
									repeatCount="indefinite"
									values="M446.86448,329.36764Q408.73529,408.73529,329.36764,419.76576Q250,430.79624,166.60504,423.79308Q83.21008,416.78992,69.36975,333.39496Q55.52942,250,96.13341,193.3687Q136.7374,136.7374,193.3687,119.10083Q250,101.46426,313.50105,112.23108Q377.00211,122.99789,430.99789,186.49895Q484.99368,250,446.86448,329.36764Z;M395.5,320Q390,390,320,400Q250,410,172,408Q94,406,59,328Q24,250,70.5,183.5Q117,117,183.5,108Q250,99,335,89.5Q420,80,410.5,165Q401,250,395.5,320Z;M449.66467,329.57458Q409.14917,409.14917,329.57458,407.97733Q250,406.80549,191.3735,387.02924Q132.74701,367.25299,77.06026,308.6265Q21.3735,250,49.05191,163.36516Q76.73032,76.73032,163.36516,85.537Q250,94.34367,322.00775,100.16408Q394.01551,105.98449,442.09784,177.99225Q490.18018,250,449.66467,329.57458Z;M421.63508,307.39005Q364.7801,364.7801,307.39005,427.43403Q250,490.08796,191.6822,428.36178Q133.3644,366.6356,70.9089,308.3178Q8.4534,250,54.21728,174.99058Q99.98115,99.98115,174.99058,81.49686Q250,63.01257,330.66021,75.84607Q411.32042,88.67958,444.90524,169.33979Q478.49006,250,421.63508,307.39005Z;M408.24461,332.63257Q415.26513,415.26513,332.63257,434.71568Q250,454.16622,179.33614,422.74697Q108.67228,391.32772,65.87585,320.66386Q23.07942,250,63.27221,176.73251Q103.46501,103.46501,176.73251,63.02288Q250,22.58075,311.86507,74.4253Q373.73015,126.26985,387.47712,188.13493Q401.22409,250,408.24461,332.63257Z;M446.86448,329.36764Q408.73529,408.73529,329.36764,419.76576Q250,430.79624,166.60504,423.79308Q83.21008,416.78992,69.36975,333.39496Q55.52942,250,96.13341,193.3687Q136.7374,136.7374,193.3687,119.10083Q250,101.46426,313.50105,112.23108Q377.00211,122.99789,430.99789,186.49895Q484.99368,250,446.86448,329.36764Z"
								></animate>
							</path>
							<path id="blob" fill="url(#gradient)" style="opacity: 0.64">
								<animate
									attributeName="d"
									dur="13.9s"
									repeatCount="indefinite"
									values="M408.24461,332.63257Q415.26513,415.26513,332.63257,434.71568Q250,454.16622,179.33614,422.74697Q108.67228,391.32772,65.87585,320.66386Q23.07942,250,63.27221,176.73251Q103.46501,103.46501,176.73251,63.02288Q250,22.58075,311.86507,74.4253Q373.73015,126.26985,387.47712,188.13493Q401.22409,250,408.24461,332.63257Z;M421.63508,307.39005Q364.7801,364.7801,307.39005,427.43403Q250,490.08796,191.6822,428.36178Q133.3644,366.6356,70.9089,308.3178Q8.4534,250,54.21728,174.99058Q99.98115,99.98115,174.99058,81.49686Q250,63.01257,330.66021,75.84607Q411.32042,88.67958,444.90524,169.33979Q478.49006,250,421.63508,307.39005Z;M395.5,320Q390,390,320,400Q250,410,172,408Q94,406,59,328Q24,250,70.5,183.5Q117,117,183.5,108Q250,99,335,89.5Q420,80,410.5,165Q401,250,395.5,320Z;M449.66467,329.57458Q409.14917,409.14917,329.57458,407.97733Q250,406.80549,191.3735,387.02924Q132.74701,367.25299,77.06026,308.6265Q21.3735,250,49.05191,163.36516Q76.73032,76.73032,163.36516,85.537Q250,94.34367,322.00775,100.16408Q394.01551,105.98449,442.09784,177.99225Q490.18018,250,449.66467,329.57458Z;M423.42552,332.41134Q414.82268,414.82268,332.41134,424.30554Q250,433.78841,170.96572,420.92848Q91.93144,408.06856,46.07152,329.03428Q0.21159,250,66.88003,191.77423Q133.54846,133.54846,191.77423,102.82861Q250,72.10876,305.00592,106.04846Q360.01185,139.98815,396.0201,194.99408Q432.02836,250,423.42552,332.41134Z;M408.24461,332.63257Q415.26513,415.26513,332.63257,434.71568Q250,454.16622,179.33614,422.74697Q108.67228,391.32772,65.87585,320.66386Q23.07942,250,63.27221,176.73251Q103.46501,103.46501,176.73251,63.02288Q250,22.58075,311.86507,74.4253Q373.73015,126.26985,387.47712,188.13493Q401.22409,250,408.24461,332.63257Z"
								></animate>
							</path>
						</svg>
						<div class="relative">
							<img
								class="object-contain object-center w-full mx-auto max-h-64 md:max-h-96 lg:max-h-128"
								alt="hero"
								src="/herocopy.png"
							/>
						</div>
					</div>
				</div>
			</div>
			<div
				class="flex flex-col items-center mt-12 mb-16 text-left md:items-start lg:flex-grow md:w-1/2 md:pl-6 xl:pl-24 md:mb-0 xl:mt-0"
			>
				<!-- <span
						class="mb-8 text-xs font-bold tracking-widest uppercase text-amber-600 "
					>
						Your tagline
					</span> -->
				<!-- <img src="/logo1.png" alt="" class="max-w-[200px] mb-4"> -->

				<h1
					class="mb-2 text-5xl font-bold tracking-tighter text-center text-black md:text-left md:text-6xl"
				>
					<span class="text-gray-500">EXPERIENCE</span><br />
					<span
						class="text-transparent text-9xl bg-clip-text bg-gradient-to-br from-amber-400 to-pink-600"
						>PURI</span
					>
					<div class="text-gray-500 underline decoration-amber-400">
						RESPONSIBLY
					</div>
				</h1>

				<p
					class="mt-2 mb-4 text-base leading-relaxed text-center text-gray-600 sm:px-12 md:text-left"
				>
					We aim to bring maximum economic benefit to the locals and minimum
					negative impact on environment for empowerment, conservation and
					innovation.
				</p>
				<!-- <div class="flex mt-0 lg:mt-6 max-w-7xl">
					<div class="mb-6 rounded-lg sm:mt-0">
						<a href="#package"
							class="items-center block px-10 py-4 text-base font-bold text-center text-black transition duration-500 ease-in-out transform bg-amber-400 rounded-xl hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 ">Order
							Now</a>
					</div>
				</div> -->
			</div>
		</div>

		<!-- services -->
		<div class="relative max-w-5xl p-6 pb-12 mx-auto">
			<div
				class="z-50 flex flex-col items-center justify-center gap-8 my-12 sm:flex-row"
			>
				<!-- <div class="text-center">
					<p class="mb-3 text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-200">
						Small business solutions
					</p>
					<h1 class="text-3xl font-bold text-gray-800 sm:text-5xl lg:text-6xl lg:leading-tight dark:text-gray-200">
						Turn online shoppers into <span class="text-blue-500">lifetime customers</span>
					</h1>
				</div> -->

				<!-- <img src="/pata_painting1.jpg" alt=""
					class="object-cover w-64 h-64 rounded-full shrink-0 ring-4 ring-offset-4 ring-sky-500"> -->
				<div class="text-center">
					<h3
						class="inline-block text-2xl font-semibold tracking-wide text-gray-500 border-b-2 border-sky-500"
					>
						OUR SERVICES
					</h3>

					<h2 class="mt-3 text-4xl font-bold text-gray-500">
						Connecting You with
						<div
							class="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-sky-600"
						>
							Local Experts
						</div>
					</h2>

					<p class="max-w-lg mt-3">
						<span class="font-bold">I am Puri</span> is an initiative of
						<span class="font-bold">Odisha Ecotourism Foundation</span> Trust to
						promote Responsible Tourism. Connect with local experts who can
						provide you with authentic and unique experiences that align with
						the principles of
						<span
							class="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-green-500 to-teal-600"
							>responsible travel</span
						>. From guided tours to temple visits, we will show you the best of
						what our city has to offer.
					</p>
				</div>
			</div>

			<!-- <svg width="720" height="720" viewBox="0 0 720 720" fill="none" xmlns="http://www.w3.org/2000/svg"
				class="absolute top-0 z-10 scale-50 sm:-left-1/3 opacity-20">
				<path
					d="M719.908 359.516L687.658 327.265C685.121 300.812 679.324 275.083 670.627 250.26L668.997 254.244C667.002 247.724 664.648 241.015 662.111 234.495C659.393 227.974 656.497 221.63 653.054 215.651L656.861 217.281C645.627 193.729 631.315 171.443 614.465 150.969L614.455 105.313H568.799C548.326 88.4639 526.039 74.3292 502.304 62.9172L492.7 39.7239L469.507 49.328C445.408 40.8124 420.225 35.016 394.496 32.4787L392.324 32.2964L360.434 0.041748L328.366 32.1098L326.194 32.292C300.464 35.0108 275.282 40.6254 251.183 49.1414L227.99 39.5372L218.386 62.7306C194.651 74.1472 172.364 88.2772 151.891 105.127L106.23 105.132V151.153C89.3803 171.626 75.2456 193.913 63.8336 217.465L40.6402 227.069L50.2444 250.444C41.5465 275.267 35.7497 300.996 33.2137 327.449L0.959045 359.517L33.2097 391.768C35.7461 418.404 41.7253 444.132 50.2404 468.591L40.6415 492.143L64.1934 501.929C75.6101 525.664 89.9228 547.768 106.412 568.065V614.086H152.433C172.543 630.576 194.652 644.889 218.387 656.305L228.173 679.857L251.725 670.071C276.007 678.586 301.731 684.383 328.365 687.101L360.797 719.533L393.229 687.101C419.865 684.565 445.412 678.768 469.869 670.071L493.421 679.857L503.208 656.305C526.942 644.888 549.046 630.758 569.161 614.269H615.182L615.177 567.878C631.666 547.769 645.98 525.482 657.396 501.925L680.948 492.139L671.161 468.764C679.859 444.305 685.656 418.576 688.192 391.941L719.908 359.516ZM576.762 179.049C594.158 199.888 608.288 222.899 618.98 247.539L422.94 328.711C421.493 325.632 419.68 322.731 417.868 320.013C422.576 315.482 448.305 292.111 484.179 289.753L485.81 289.57V287.94C485.81 287.758 486.534 268.372 491.607 257.503C492.878 258.409 495.049 259.675 498.492 261.852L501.029 263.482L501.211 260.581C501.211 260.216 505.56 216.554 567.523 176.69L576.762 179.049ZM472.584 100.961C497.224 111.649 520.054 125.784 540.71 143.18L543.064 152.06C503.381 213.847 459.72 218.196 459.173 218.372L456.272 218.554L457.902 221.091C460.074 224.534 461.345 226.705 462.251 227.976C451.382 233.232 431.991 233.773 431.814 233.773H430.184L430.001 235.404C427.647 271.461 404.272 297.008 399.741 301.716C397.023 299.903 394.304 298.273 391.408 296.825L472.584 100.961ZM377.824 83.5652L385.975 78.857C412.97 81.2111 439.246 87.5548 464.246 97.5183L383.074 293.558C379.814 292.47 376.553 291.563 373.288 291.022C373.47 284.319 375.1 249.71 398.834 222.715L399.923 221.444L398.834 220.174C398.652 219.991 385.428 205.862 381.438 194.444C383.251 194.08 385.787 193.538 389.412 192.632L392.313 191.908L390.319 189.736C389.959 189.377 362.24 155.315 377.824 83.5639L377.824 83.5652ZM334.882 78.857L343.033 83.5652C358.617 155.315 330.892 189.377 330.533 189.743L328.538 191.914L331.439 192.638C335.064 193.545 337.783 194.086 339.413 194.451C335.429 205.868 322.2 219.998 322.017 220.18L320.929 221.451L322.017 222.722C345.752 249.717 347.381 284.509 347.564 291.029C344.486 291.57 341.22 292.476 338.142 293.565L256.97 97.3383C281.975 87.5519 308.063 81.3957 334.882 78.8597L334.882 78.857ZM179.962 143.174C200.8 125.778 223.811 111.466 248.634 100.778L329.806 296.818C326.728 298.266 323.827 300.079 321.108 301.891C316.577 297.183 293.207 271.454 290.848 235.579L290.666 233.949H289.035C288.853 233.949 269.467 233.225 258.598 228.152C259.504 226.881 260.77 224.709 262.947 221.267L264.577 218.73L261.676 218.548C261.312 218.548 217.649 214.199 177.785 152.236L179.962 143.174ZM144.092 179.049L152.973 176.695C214.759 216.377 219.109 260.039 219.285 260.585L219.467 263.487L222.003 261.856C225.446 259.684 227.618 258.414 228.889 257.507C234.144 268.377 234.686 287.767 234.686 287.945V289.575L236.316 289.757C272.373 292.111 298.103 315.487 302.628 320.017C300.816 322.736 299.185 325.455 297.737 328.533L101.871 247.356C112.74 222.716 126.876 199.886 144.089 179.049L144.092 179.049ZM98.4311 255.689L294.471 336.861C293.383 340.121 292.476 343.382 291.935 346.647C285.773 346.647 250.804 345.017 223.628 321.101L222.357 320.012L221.086 321.101C220.904 321.283 206.774 334.507 195.357 338.497C194.992 337.049 194.451 334.512 193.545 330.523L192.821 327.622L190.649 329.616C190.466 329.799 169.633 346.83 126.509 346.83C113.279 346.83 99.1486 345.2 84.4726 341.939L79.7644 333.788C82.306 306.965 88.4674 280.695 98.431 255.689L98.4311 255.689ZM79.7697 385.058L84.478 376.907C99.1553 373.647 113.285 372.017 126.514 372.017C169.634 372.017 190.29 389.047 190.654 389.23L192.826 391.225L193.55 388.324C194.456 384.339 194.998 381.803 195.362 380.35C206.779 384.334 220.909 397.563 221.092 397.746L222.363 398.834L223.633 397.746C250.993 373.828 285.961 372.382 291.94 372.199C292.482 375.459 293.388 378.72 294.476 381.985L98.4231 463.147C88.4595 438.141 82.2978 411.871 79.7618 385.059L79.7697 385.058ZM144.092 539.792C126.696 519.136 112.566 496.125 101.874 471.485L297.914 390.318C299.362 393.219 300.992 396.115 302.804 398.834C298.096 403.365 272.367 426.735 236.492 429.094L234.862 429.276V430.907C234.862 431.089 234.138 450.475 229.065 461.344C227.794 460.438 225.623 459.172 222.18 456.995L219.643 455.365L219.461 458.266C219.461 458.63 214.93 502.474 153.149 542.156L144.092 539.792ZM248.634 618.068C223.994 607.38 200.8 593.062 179.962 575.672L177.608 566.791C217.29 505.005 260.952 500.655 261.498 500.479L264.399 500.297L262.769 497.761C260.597 494.318 259.326 492.146 258.42 490.875C269.29 485.62 288.68 485.078 288.857 485.078H290.488L290.67 483.448C293.024 447.391 316.399 421.844 320.93 417.136C323.649 418.949 326.545 420.761 329.628 422.209L248.634 618.068ZM343.03 635.276L334.879 639.984C308.061 637.63 281.972 631.286 256.967 621.505L338.139 425.465C341.217 426.554 344.3 427.278 347.561 428.002C347.378 434.705 345.748 469.314 322.014 496.308L320.925 497.579L322.014 498.85C322.196 499.032 335.421 513.162 339.41 524.579C337.597 524.944 335.061 525.486 331.436 526.392L328.535 527.116L330.53 529.288C330.894 529.465 358.612 563.533 343.03 635.277L343.03 635.276ZM299.727 359.516C299.727 325.994 326.904 298.818 360.424 298.818C393.944 298.818 421.122 325.996 421.122 359.516C421.122 393.036 393.944 420.213 360.424 420.213C326.903 420.208 299.727 392.853 299.727 359.516ZM385.972 639.996L377.821 635.287C362.237 563.538 389.962 529.475 390.321 529.11L392.316 526.938L389.415 526.214C385.79 525.308 383.071 524.766 381.441 524.402C385.425 512.985 398.654 498.855 398.837 498.672L399.926 497.402L398.837 496.131C375.102 469.136 373.473 434.344 373.29 427.824C376.551 427.282 379.811 426.376 383.077 425.288L464.249 621.328C439.243 631.296 412.967 637.64 385.973 639.994L385.972 639.996ZM540.892 575.673C520.236 592.886 497.226 607.2 472.767 617.892L391.595 421.852C394.496 420.404 397.392 418.774 399.928 416.961C404.46 421.669 427.83 447.398 430.188 483.273L430.371 484.903H432.001C432.183 484.903 451.569 485.627 462.438 490.7C461.532 491.971 460.266 494.143 458.089 497.586L456.459 500.122L459.36 500.304C459.725 500.304 503.568 504.836 543.251 566.616L540.892 575.673ZM576.762 539.798L567.882 542.152C506.095 502.47 501.745 458.808 501.569 458.262L501.387 455.361L498.851 456.991C495.408 459.163 493.236 460.434 491.965 461.34C486.71 450.47 486.168 431.08 486.168 430.903V429.272L484.538 429.09C448.481 426.736 422.934 403.361 418.226 398.83C420.039 396.111 421.851 393.216 423.299 390.132L619.339 471.304C608.292 495.955 593.975 519.148 576.76 539.799L576.762 539.798ZM622.423 462.976L426.383 381.804C427.472 378.726 428.378 375.46 428.919 372.382C435.081 372.382 470.05 374.012 497.226 397.928L498.497 399.017L499.768 397.928C499.95 397.746 514.08 384.522 525.497 380.532C525.862 381.98 526.403 384.517 527.31 388.506L528.034 391.408L530.206 389.413C530.388 389.23 551.221 372.199 594.345 372.199C607.575 372.199 621.705 373.83 636.381 377.09L641.09 385.241C638.548 411.881 632.387 437.976 622.423 462.976L622.423 462.976ZM636.376 342.126C621.699 345.387 607.57 347.017 594.34 347.017C551.22 347.017 530.564 329.986 530.2 329.804L528.029 327.809L527.305 330.71C526.398 334.694 525.857 337.231 525.492 338.684C514.075 334.7 499.945 321.471 499.763 321.288L498.492 320.199L497.221 321.288C469.861 345.205 434.893 346.652 428.914 346.835C428.373 343.574 427.467 340.491 426.378 337.413L622.418 256.241C632.382 281.246 638.543 307.334 640.897 334.153L636.376 342.126Z"
					fill="black" />
			</svg> -->

			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2">
				<ServiceCard
					@clicked="showBookingModal('Temple Visit')"
					title="Temple Visit"
					description="Experience the serenity and beauty of the temple with a personalized visit."
					image="https://images.odishatv.in/uploadimage/library/16_9/16_9_0/IMAGE_1645674093.jpg"
					class="overflow-hidden sm:max-w-96 shrink-0"
				/>
				<ServiceCard
					@clicked="showBookingModal('Beach Tour')"
					title="Beach Tour"
					description="Discover the beauty of our beaches. You can even hire a local lifeguard."
					image="/beach_trail.jpeg"
					class="overflow-hidden sm:max-w-96 shrink-0"
				/>
				<ServiceCard
					@clicked="showBookingModal('Heritage Walk')"
					title="Heritage Walk"
					description="Explore the breathtaking craftsmanship of heritage buildings and traditions."
					image="https://www.drishtiias.com/images/uploads/1640860172_Sun_temple_drishti_ias_english.png"
					class="overflow-hidden sm:max-w-96 shrink-0"
				/>
				<ServiceCard
					@clicked="showBookingModal('Food Trail')"
					title="Food Trail"
					description="Satiate the sweet tooth in you and taste Malpua to khaja to kheer and many more"
					image="/sweets_tour.png"
					class="overflow-hidden sm:max-w-96 shrink-0"
				/>
			</div>
		</div>

		<!-- art tour -->
		<!-- Hero -->
		<div class="bg-slate-900">
			<div class="bg-gradient-to-b from-violet-600/[.15] via-transparent">
				<div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
					<!-- Announcement Banner -->
					<div class="flex justify-center">
						<div
							class="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md"
						>
							<p class="inline-block mr-2 text-sm text-white">Every Weekday</p>
							<span
								class="group-hover:bg-white/[.1] py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm"
							>
								<svg
									class="w-2.5 h-2.5"
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
								>
									<path
										d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
									/>
								</svg>
							</span>
						</div>
					</div>
					<!-- End Announcement Banner -->

					<!-- Title -->
					<div class="max-w-3xl mx-auto text-center">
						<h1
							class="block text-4xl font-medium text-gray-200 sm:text-5xl md:text-6xl lg:text-7xl"
						>
							Art Tour
						</h1>
					</div>
					<!-- End Title -->

					<div class="max-w-3xl mx-auto text-center">
						<p class="text-lg text-gray-400">
							Unleash your creativity and learn the timeless art of Pattachitra
							with our expert instructors. Learn the secrets of Pattachitra from
							esteemed local artists and create your own masterpiece.
						</p>
					</div>

					<!-- Buttons -->
					<div class="text-center">
						<button
							@click.prevent="showBookingModal('Art Tour')"
							class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-center text-white border border-transparent rounded-full shadow-lg gap-x-3 bg-gradient-to-tl from-blue-600 to-violet-600 shadow-transparent hover:shadow-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
						>
							Book now
							<svg
								class="w-2.5 h-2.5"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
							>
								<path
									d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
								/>
							</svg>
						</button>
					</div>
					<!-- End Buttons -->
				</div>
			</div>
		</div>
		<!-- End Hero -->

		<!-- testimonials -->
		<!-- <section class="relative bg-white dark:bg-gray-900">
			<div class="container px-6 py-10 mx-auto">
				<h1
					class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white"
				>
					What our <span class="text-blue-500">clients</span> say
				</h1>

				<p
					class="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
					ex placeat modi magni quia error alias, adipisci rem similique, at
					omnis eligendi optio eos harum.
				</p>

				<section
					class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3"
				>
					<div class="p-8 border rounded-lg dark:border-gray-700">
						<p class="leading-loose text-gray-500 dark:text-gray-400">
							“I had a fantastic time on the bicycle tour, the guide was
							knowledgeable and the route was stunning. I would highly recommend
							it to anyone visiting the city.”.
						</p>

						<div class="flex items-center mt-8 -mx-2">
							<img
								class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
								src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
								alt=""
							/>

							<div class="mx-2">
								<h1 class="font-semibold text-gray-800 dark:text-white">
									Robert
								</h1>
								<span class="text-sm text-gray-500"
									>CTO, Robert Consultency</span
								>
							</div>
						</div>
					</div>

					<div class="p-8 border rounded-lg dark:border-gray-700">
						<p class="leading-loose text-gray-500 dark:text-gray-400">
							“Visiting the temple was a truly spiritual experience. The
							ambiance was peaceful and the staff were incredibly welcoming. I
							feel grateful to have had the opportunity to visit such a sacred
							place.”.
						</p>

						<div class="flex items-center mt-8 -mx-2">
							<img
								class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
								src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
								alt=""
							/>

							<div class="mx-2">
								<h1 class="font-semibold text-gray-800 dark:text-white">
									Jeny Doe
								</h1>
								<span class="text-sm text-gray-500">CEO, Jeny Consultency</span>
							</div>
						</div>
					</div>

					<div class="p-8 border rounded-lg dark:border-gray-700">
						<p class="leading-loose text-gray-500 dark:text-gray-400">
							“I booked the bicycle tour for my family and we all had a great
							time. The bikes were in good condition and the route was easy to
							follow. We saw so many interesting sights and had a lot of fun. I
							would definitely do it again.”.
						</p>

						<div class="flex items-center mt-8 -mx-2">
							<img
								class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
								src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
								alt=""
							/>

							<div class="mx-2">
								<h1 class="font-semibold text-gray-800 dark:text-white">
									Ema Watson
								</h1>
								<span class="text-sm text-gray-500"
									>Marketing Manager at Stech</span
								>
							</div>
						</div>
					</div>
				</section>
			</div>

			<svg
				width="1513"
				height="240"
				viewBox="0 0 1513 240"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="absolute z-10 w-full -bottom-44"
			>
				<path
					d="M146.393 239.733C45.4644 231.868 0.816284 124.088 0.816284 51.0829V0.332767L1512.86 0.332584V48.0092C1068.62 114.676 187.241 242.916 146.393 239.733Z"
					fill="white"
				/>
			</svg>
		</section> -->

		<!-- bicycle tours -->
		<div class="pb-12 bg-teal-800 pt-28">
			<div class="max-w-5xl p-6 mx-auto overflow-hidden text-white">
				<div class="z-50 grid gap-4 sm:grid-cols-2">
					<div class="p-6 text-teal-800 bg-white rounded-tl-3xl rounded-br-3xl">
						<div class="text-6xl font-bold font-arvo">BICYCLE TOURS</div>
						<div class="mt-6">
							Discover the lanscapes of Puri in a healthier way and soak in the
							local culture.
						</div>
					</div>

					<div class="p-6 bg-teal-900 rounded-tl-3xl rounded-br-3xl">
						<img
							src="https://source.unsplash.com/random?heritage"
							alt=""
							class="object-cover w-full rounded-lg h-44"
						/>
						<div class="pt-3 text-3xl font-bold font-arvo">
							Heritage <span class="opacity-50">Trail</span>
						</div>
						<div class="text-white/60">
							Journey through the cultural history of Puri and learn about the
							temples and feel the essence of Puri.
						</div>

						<button
							@click.prevent="showBookingModal('Bicycle Tour - Heritage Trail')"
							class="px-3 py-1 mt-2 font-bold text-center text-black transition rounded bg-amber-500 hover:bg-white"
						>
							Book Now
						</button>
					</div>

					<div
						class="p-6 bg-teal-900 rounded-tl-3xl rounded-br-3xl hover:ring-2 hover:ring-teal-700"
					>
						<img
							src="https://source.unsplash.com/random?countryside"
							alt=""
							class="object-cover w-full rounded-lg h-44"
						/>

						<div class="pt-3 text-3xl font-bold font-arvo">
							Countryside <span class="opacity-50">Trail</span>
						</div>
						<div class="text-white/60">
							Explore the calm countryside through a crafted trail on a bicycle
							and soak in the tranquility.
						</div>

						<button
							@click.prevent="
								showBookingModal('Bicycle Tour - Countryside Trail')
							"
							class="px-3 py-1 mt-2 font-bold text-center text-black transition rounded bg-amber-500 hover:bg-white"
						>
							Book Now
						</button>
					</div>
					<div class="p-6 bg-teal-900 rounded-tl-3xl rounded-br-3xl">
						<img
							src="https://source.unsplash.com/random?forest"
							alt=""
							class="object-cover w-full rounded-lg h-44"
						/>

						<div class="pt-3 text-3xl font-bold font-arvo">
							Forest <span class="opacity-50">Trail</span>
						</div>
						<div class="text-white/60">
							Explore thick woods of the Balukhanda-Konark Sanctuary, spot a
							variety of birds, and the mesmerizingly beautiful spotted deers,
							and end up finding the beach.
						</div>

						<button
							@click.prevent="showBookingModal('Bicycle Tour - Forest Trail')"
							class="px-3 py-1 mt-2 font-bold text-center text-black transition rounded bg-amber-500 hover:bg-white"
						>
							Book Now
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="max-w-4xl p-3 pt-12 mx-auto">
			<a class="relative block group" href="#">
				<div
					class="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]"
				>
					<img
						class="absolute top-0 left-0 object-cover w-full h-full"
						src="https://www.tourmyindia.com/wildlife_sancturies/images/chilka-lake-odisha.jpg"
						alt="Image Description"
					/>
				</div>

				<div class="absolute inset-x-0 bottom-0 z-10">
					<div class="flex flex-col h-full p-4 sm:p-6">
						<h3
							class="block text-5xl font-bold text-gray-100 sm:text-4xl md:text-5xl lg:text-6xl"
						>
							Discover the serene majesty of Chilika Lake
						</h3>
						<!-- <p class="mt-2 text-white/[.8]">
							Discover the serene majesty of Chilika Lake, India's largest
							coastal lagoon, and witness its diverse avian inhabitants amidst a
							picturesque setting. Marvel at the UNESCO World Heritage site of
							Konark, where the grand Sun Temple stands tall.
						</p> -->
					</div>
				</div>
			</a>
		</div>

		<!-- Hero -->
		<div class="relative max-w-4xl px-4 pb-12 mx-auto sm:px-6 lg:px-8">
			<!-- SVG Element -->
			<div class="absolute top-0 right-0 md:block -z-10">
				<svg
					class="w-16 h-auto text-orange-500"
					width="121"
					height="135"
					viewBox="0 0 121 135"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
						stroke="currentColor"
						stroke-width="10"
						stroke-linecap="round"
					/>
					<path
						d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
						stroke="currentColor"
						stroke-width="10"
						stroke-linecap="round"
					/>
					<path
						d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
						stroke="currentColor"
						stroke-width="10"
						stroke-linecap="round"
					/>
				</svg>
			</div>
			<!-- End SVG Element -->

			<!-- SVG Element -->
			<div class="absolute left-0 bottom-4 md:block -z-10">
				<svg
					class="w-40 h-auto text-cyan-500"
					width="347"
					height="188"
					viewBox="0 0 347 188"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
						stroke="currentColor"
						stroke-width="7"
						stroke-linecap="round"
					/>
				</svg>
			</div>
			<!-- End SVG Element -->
			<!-- Grid -->
			<div
				class="z-30 grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center"
			>
				<div class="sm:col-span-3">
					<!-- <h1
						class="block text-5xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white"
					>
						Discover the serene majesty of Chilika Lake
					</h1> -->
					<p class="mt-3 text-lg text-gray-800 dark:text-gray-400">
						Discover the serene majesty of Chilika Lake, India's largest coastal
						lagoon, and witness its diverse avian inhabitants amidst a
						picturesque setting. Marvel at the UNESCO World Heritage site of
						Konark, where the grand Sun Temple stands tall.

						<!-- , adorned with
						awe-inspiring stone carvings. Immerse yourself in the treasures of
						Puri as you explore these iconic destinations, capturing the essence
						of their magnificence. -->
					</p>

					<a
						class="inline-flex items-center justify-center w-full px-4 py-3 mt-6 font-medium text-center text-white transition bg-blue-600 border border-transparent rounded-md sm:w-auto gap-x-3 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
						href="#"
					>
						Book an excursion
					</a>
				</div>
				<!-- End Col -->

				<!-- <div class="mt-10 sm:col-span-4 lg:mt-0">
					<img
						class="w-full rounded-xl"
						src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/80/32/10.jpg"
						alt="Image Description"
					/>
				</div> -->
				<!-- End Col -->
			</div>
			<!-- End Grid -->
		</div>
		<!-- End Hero -->

		<!-- experiential tours -->
		<div class="py-12 bg-gradient-to-b from-teal-800 via-cyan-600 to-gray-900">
			<div class="max-w-5xl p-6 mx-auto text-stone-600">
				<div class="grid gap-4">
					<div
						class="flex flex-col items-center overflow-hidden border rounded-lg border-cyan-900"
					>
						<div class="w-full shrink-0">
							<img
								src="/art_workshop.png"
								alt=""
								class="object-cover w-full rounded-t-lg h-44"
							/>
						</div>
						<div class="flex flex-col h-full p-6 bg-white text-cyan-900">
							<div class="mb-1 text-3xl font-bold capitalize">Art Workshop</div>
							<div class="h-2 bg-pink-600 rounded-lg w-44"></div>
							<div class="flex-grow mt-3 leading-relaxed">
								Unleash your creativity and learn the timeless art of
								Pattachitra with our expert instructors. Learn the secrets of
								Pattachitra from esteemed local artists and create your own
								masterpiece.
							</div>
							<button
								@click.prevent="showBookingModal('Art Workshop')"
								class="w-full p-3 mt-3 font-bold text-black rounded-lg bg-amber-400 sm:w-44 sm:inline-block"
							>
								Book Now
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Odisha Eco Tourism -->
		<div class="max-w-[65rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			<!-- Grid -->
			<div class="grid gap-10 md:grid-cols-5">
				<div class="md:col-span-2">
					<div class="max-w-xs">
						<img
							src="/odisha_eco_logo.jpeg"
							alt=""
							class="object-contain mx-auto overflow-hidden rounded-xl"
						/>
						<h2
							class="pt-3 text-2xl font-bold md:text-4xl md:leading-tight dark:text-white"
						>
							Empowering<br />
							local community
						</h2>
						<p class="hidden mt-1 text-gray-600 md:block dark:text-gray-400">
							We are a passionate team of experienced tourism professionals with
							our expertise in the field of responsible tourism for over two
							decades. The seed of this foundation was sowed to grow into a
							beautiful tree that protects and conserves the nature and our
							cultural heritage. We aspire to empower and uplift the local
							community and imbibe the meaningful benefits of eco and
							responsible tourism right from the grass root level.
						</p>
					</div>
				</div>
				<!-- End Col -->

				<div class="md:col-span-3">
					<!-- Accordion -->
					<div class="space-y-3 divide-y divide-gray-200">
						<div class="py-3">
							<h3
								class="pb-3 font-semibold text-left text-gray-800 md:text-lg hover:text-gray-500"
							>
								Our Vision
							</h3>
							<p class="text-gray-600 dark:text-gray-400">
								We strongly believe that responsible tourism can provide a
								driving force to change lives and it is one of the best tools to
								create positive economic, social and environmental impacts
								throughout the globe.
							</p>
						</div>

						<div
							class="py-3"
							id="hs-basic-with-title-and-arrow-stretched-heading-one"
						>
							<h3
								class="pb-3 font-semibold text-left text-gray-800 md:text-lg hover:text-gray-500"
							>
								Our Mission
							</h3>
							<p class="text-gray-600 dark:text-gray-400">
								Our mission is to empower the local community and ignite within
								them a feeling of pride and respect for their natural and
								cultural heritage.. We intend to create awareness, educate the
								young minds beyond the four walls of classrooms and to instill
								amongst them an ethereal love for Mother Earth. Supporting
								projects related to eco tourism, training of local community at
								grassroots level and raising voice where the negative impact of
								tourism puts our nature and culture in danger are some of the
								goals of Odisha Eco Tourism Foundations.
							</p>
						</div>

						<div
							class="py-3"
							id="hs-basic-with-title-and-arrow-stretched-heading-one"
						>
							<h3
								class="pb-3 font-semibold text-left text-gray-800 md:text-lg hover:text-gray-500"
							>
								Our Partners
							</h3>
							<p class="text-gray-600 dark:text-gray-400">
								OETF welcomes likeminded businesses, organizations, individuals
								who can contribute to meet the goal of the foundation .We are
								thankful to all our partners as mentioned below for their
								support and active participation.
							</p>

							<div class="flex pt-3">
								<div>
									<img
										src="http://www.odishaecotourismfoundation.com/wp-content/uploads/2020/11/heritage-tours-orissa.png"
										alt=""
									/>
									<a
										href="https://www.heritagetoursorissa.com/"
										target="_blank"
									>
										<h3 class="text-lg font-bold">Heritage Tours</h3>
									</a>
									<p>
										Leading Tour Operator and specialized in Eco and Responsible
										Tourism since 1997
									</p>
								</div>
								<div>
									<img
										src="http://www.odishaecotourismfoundation.com/wp-content/uploads/2020/11/desia-koraput.png"
										alt=""
									/>
									<a href="https://www.desiakoraput.com/" target="_blank">
										<h3 class="text-lg font-bold">Desia Eco Tourism Camp</h3>
									</a>

									<p>
										Our responsible tourism initiative and learning center at
										Koraput valley in Odisha
									</p>
								</div>
							</div>

							<p class="py-3">
								<span class="font-bold">Barefoot</span> – our sister concern and
								a small NGO with a focus on volunteering for the need of the
								society.
							</p>
						</div>
					</div>
					<!-- End Accordion -->
				</div>
				<!-- End Col -->
			</div>
			<!-- End Grid -->
		</div>
		<!-- End -->

		<div class="px-2 py-12 text-center text-white bg-gray-900 hero">
			<h1 class="mb-6 text-5xl font-bold leading-none font-arvo">
				<span class="text-purple-500">SATURDAY</span> HAAT
			</h1>
			<h2 class="text-4xl">
				Local Artists’ <span class="text-purple-500">Night Bazaar</span>
			</h2>

			<button
				@click.prevent="showBookingModal('Saturday Haat')"
				class="w-full p-3 mt-6 font-bold text-black rounded-full bg-amber-400 sm:w-44 sm:inline-block"
			>
				Book Guided Tour
			</button>
			<img
				src="/saturdayhaat.png"
				alt="night market"
				class="object-cover w-full max-w-5xl pt-12 mx-auto mb-6"
			/>
			<div class="max-w-3xl px-12 mx-auto">
				<p class="mb-8 text-xl font-light">
					Support local artisans and discover unique, handmade crafts at the
					Saturday Night Bazaar at Niladree Beach. This market, organized by the
					Odisha Ecotourism Foundation Trust and Puri Municipality, is a great
					way to explore Puri's creative community.
				</p>
				<!-- <button class="px-8 py-4 font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600">Learn
					More</button> -->
			</div>

			<div
				class="grid max-w-4xl gap-12 px-4 mx-auto md:divide-x md:grid-cols-2"
			>
				<div class="px-6">
					<ul class="space-y-6">
						<li class="flex text-white">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6 shrink-0"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
								/>
							</svg>

							<div class="ml-4 text-left">
								<h3 class="text-lg font-bold text-purple-400">
									Direct interactions with artisans
								</h3>
								<p class="text-gray-400">
									Connect with the artisans who bring their creativity and skill
									to life, and learn about their techniques and traditions.
								</p>
							</div>
						</li>

						<li class="flex text-white">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6 shrink-0"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
								/>
							</svg>

							<div class="ml-4 text-left">
								<h3 class="text-lg font-bold text-purple-400">
									Cultural events
								</h3>
								<p class="text-gray-400">
									Connect with the artisans who bring their creativity and skill
									to life, and learn about their techniques and traditions.
								</p>
							</div>
						</li>

						<li class="flex text-white">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6 shrink-0"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
								/>
							</svg>

							<div class="ml-4 text-left">
								<h3 class="text-lg font-bold text-purple-400">
									Locally made fresh food
								</h3>
								<p class="text-gray-400">
									Enjoy the taste of fresh, locally made food that is made with
									love and care and support the local community.
								</p>
							</div>
						</li>
					</ul>
				</div>
				<div class="max-w-xl mx-auto md:text-left md:pl-6">
					<h2 class="font-bold text-7xl">
						<span class="text-purple-500">One of its kind</span> local beach
						market
					</h2>
					<p class="text-2xl">
						Enjoy the weekend immersed in the culture of Puri!
					</p>
				</div>
			</div>
		</div>

		<!-- FAQ -->
		<div class="max-w-[65rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			<!-- Grid -->
			<div class="grid gap-10 md:grid-cols-5">
				<div class="md:col-span-2">
					<div class="max-w-xs">
						<h2
							class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white"
						>
							Frequently<br />asked questions
						</h2>
						<p class="hidden mt-1 text-gray-600 md:block dark:text-gray-400">
							Answers to the most frequently asked questions.
						</p>
					</div>
				</div>
				<!-- End Col -->

				<div class="md:col-span-3">
					<!-- Accordion -->
					<div class="space-y-3 divide-y divide-gray-200">
						<div class="py-3">
							<h3
								class="pb-3 font-semibold text-left text-gray-800 md:text-lg hover:text-gray-500"
							>
								What kind of tours does your travel website offer in Puri?
							</h3>
							<p class="text-gray-600 dark:text-gray-400">
								We offer a range of personalised temple visits, bicycle tours,
								workshops, and experiential tours in Puri. Our tours are
								designed to give visitors a unique and immersive experience, and
								are tailored to the individual interests and preferences of our
								guests.
							</p>
						</div>

						<div
							class="py-3"
							id="hs-basic-with-title-and-arrow-stretched-heading-one"
						>
							<h3
								class="pb-3 font-semibold text-left text-gray-800 md:text-lg hover:text-gray-500"
							>
								What is the principle of responsible tourism that your company
								follows?
							</h3>
							<p class="text-gray-600 dark:text-gray-400">
								We believe in the principle of responsible tourism, which means
								that we strive to minimize our environmental impact and support
								local communities while providing high-quality travel
								experiences. This means that we use eco-friendly modes of
								transportation and we work with local guides and businesses to
								support the local economy.
							</p>
						</div>

						<div
							class="py-3"
							id="hs-basic-with-title-and-arrow-stretched-heading-one"
						>
							<h3
								class="pb-3 font-semibold text-left text-gray-800 md:text-lg hover:text-gray-500"
							>
								Can you accommodate travelers with special needs or
								disabilities?
							</h3>
							<p class="text-gray-600 dark:text-gray-400">
								Yes, we are committed to providing accessible and inclusive
								travel experiences for all of our guests. If you have any
								special needs or disabilities, please let us know in advance so
								that we can make the necessary arrangements to accommodate you
								on our tours.
							</p>
						</div>

						<div
							class="py-3"
							id="hs-basic-with-title-and-arrow-stretched-heading-one"
						>
							<h3
								class="pb-3 font-semibold text-left text-gray-800 md:text-lg hover:text-gray-500"
							>
								What safety measures are in place to protect travelers on your
								tours?
							</h3>
							<p class="text-gray-600 dark:text-gray-400">
								The safety and well-being of our guests is our top priority. All
								of our tours are carefully planned and conducted by experienced
								and knowledgeable local guides, and we follow all local health
								and safety guidelines to ensure a safe and enjoyable experience
								for our guests.
							</p>
						</div>
					</div>
					<!-- End Accordion -->
				</div>
				<!-- End Col -->
			</div>
			<!-- End Grid -->
		</div>
		<!-- End FAQ -->

		<footer class="px-4 py-12 mx-auto text-white bg-gray-800">
			<div class="flex items-center justify-between max-w-3xl mx-auto">
				<p class="text-sm">Copyright &copy; 2022</p>
				<div>
					<a href="#" class="inline-block mr-4 text-sm"> Contact </a>
					<a href="#" class="inline-block text-sm"> Privacy </a>
				</div>
			</div>
		</footer>

		<AppModal @close="clearForm" :isActive="isModalActive">
			<div class="relative w-full p-6 bg-gray-200 rounded-lg shadow-lg sm:p-12">
				<div
					class="flex flex-col sm:h-[calc(100vh-200px)] h-[calc(100vh-30px)]"
				>
					<div class="flex-grow h-full overflow-y-scroll">
						<div v-if="!isMailSent">
							<!-- <div>
								<h2 class="mb-2 text-2xl font-bold">Book Your Experience</h2>
								<p>Please fill out the details below.</p>
							</div> -->

							<form class="mt-2">
								<div
									class="p-4 text-left hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent hover:bg-gray-200 md:p-5 rounded-xl"
									id="tabs-with-card-item-2"
									data-hs-tab="#tabs-with-card-2"
									aria-controls="tabs-with-card-2"
									role="tab"
								>
									<span class="flex">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="flex-shrink-0 w-6 h-6 mt-2 text-gray-800 md:w-7 md:h-7 hs-tab-active:text-blue-600"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
											/>
										</svg>

										<span class="ml-6 grow">
											<span
												class="block text-lg font-semibold text-gray-800 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
												>Booking details</span
											>
											<span
												class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200"
												>Choose date and number of guests.</span
											>
										</span>
									</span>
								</div>
								<div class="flex flex-col bg-white border shadow-sm rounded-xl">
									<div class="py-4">
										<div class="px-6 py-3">
											<label
												class="block mb-2 text-sm font-bold text-gray-700"
												for="date"
											>
												Choose an experience
											</label>
											<select
												class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow focus:outline-none focus:shadow-outline"
												v-model="booking.service"
											>
												<option value="">Not selected</option>
												<option value="Temple Visit">Temple Visit</option>
												<option value="Beach Tour">Beach Tour</option>
												<option value="Heritage Walk">Heritage Walk</option>
												<option value="Food Trail">Food Trail</option>
												<option value="Bicycle Tour - Heritage Trail">
													Bicycle Tour - Heritage Trail
												</option>
												<option value="Bicycle Tour - Countryside Trail">
													Bicycle Tour - Countryside Trail
												</option>
												<option value="Bicycle Tour - Forest Trail">
													Bicycle Tour - Forest Trail
												</option>
												<option value="Guided Tour">Guided Tour</option>
												<option value="Excursions">Excursions</option>
												<option value="Nature Walk">Nature Walk</option>
												<option value="Art Tour">Art Tour</option>
												<option value="Sweets Tour">Sweets Tour</option>
												<option value="Art Workshop">Art Workshop</option>
												<option value="Saturday Haat">Saturday Haat</option>
											</select>
										</div>

										<div class="px-6 py-3">
											<label
												class="block mb-2 text-sm font-bold text-gray-700"
												for="date"
											>
												Choose date
											</label>
											<input
												class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
												id="date"
												type="date"
												placeholder="Choose the date of the tour"
												v-model="booking.date"
											/>
										</div>

										<div class="flex flex-col gap-6 px-6 py-3 sm:flex-row">
											<div class="w-full sm:w-1/2">
												<label
													class="block mb-2 text-sm font-bold text-gray-700"
													for="name"
												>
													Number of guests
												</label>
												<input
													class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
													id="name"
													type="number"
													placeholder="1"
													v-model="booking.guest_count"
												/>
											</div>
										</div>
									</div>
								</div>

								<div>
									<button
										type="button"
										class="p-4 text-left hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent hover:bg-gray-200 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700"
										id="tabs-with-card-item-2"
										data-hs-tab="#tabs-with-card-2"
										aria-controls="tabs-with-card-2"
										role="tab"
									>
										<span class="flex">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												class="flex-shrink-0 w-6 h-6 mt-2 text-gray-800 md:w-7 md:h-7 hs-tab-active:text-blue-600"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
												/>
											</svg>

											<span class="ml-6 grow">
												<span
													class="block text-lg font-semibold text-gray-800 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
													>Contact details</span
												>
												<span
													class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200"
													>Please tell us how to contact you.</span
												>
											</span>
										</span>
									</button>
									<div
										class="flex flex-col bg-white border shadow-sm rounded-xl"
									>
										<div class="px-6 py-3">
											<div class="mb-4">
												<label
													class="block mb-2 text-sm font-bold text-gray-700"
													for="name"
												>
													Name
												</label>
												<input
													class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
													id="name"
													type="text"
													placeholder="Enter your name"
													v-model="booking.guest_name"
												/>
											</div>
											<div class="mb-4">
												<label
													class="block mb-2 text-sm font-bold text-gray-700"
													for="email"
												>
													Email
												</label>
												<input
													class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
													id="email"
													type="email"
													placeholder="Enter your email"
													v-model="booking.guest_email"
												/>
											</div>

											<div class="mb-4">
												<label
													class="block mb-2 text-sm font-bold text-gray-700"
													for="phone"
												>
													Phone
												</label>
												<input
													class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
													id="phone"
													type="tel"
													placeholder="Enter your phone number"
													v-model="booking.guest_phone"
												/>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>

						<div
							v-else
							class="flex flex-col items-center justify-center h-full text-center"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-12 h-12 text-teal-600"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
								/>
							</svg>

							<div class="mt-6">
								<h2 class="text-2xl font-bold">Thank you!</h2>
								<p>
									We have received your booking. We will get back to you soon!
								</p>
							</div>
						</div>
					</div>
					<div
						v-if="!isMailSent"
						class="flex items-center justify-end py-3 mt-3 gap-x-2"
					>
						<button
							@click.prevent="isModalActive = !isModalActive"
							class="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
							data-hs-overlay="#hs-notifications"
						>
							Cancel
						</button>
						<button
							@click.prevent="sendMessage"
							class="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-cyan-600 text-white hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-all text-sm"
							:class="[
								sendMsgBtnTxt == 'Booking...'
									? 'opacity-50 pointer-events-none'
									: '',
								booking.guest_name &&
								(booking.guest_email || booking.guest_phone)
									? ''
									: 'opacity-50 pointer-events-none',
							]"
						>
							{{ sendMsgBtnTxt }}
						</button>
					</div>
				</div>
			</div>
		</AppModal>

		<!-- <AppModalNew /> -->
	</div>
</template>

<script setup>
	definePageMeta({
		layout: false,
	});

	useHead({
		title: "I Am Puri - Authentic & Unique Experiences",
		meta: [
			{
				name: "description",
				content:
					"Connect with local experts in Puri, who can provide you with authentic and unique experiences that align with the principles of responsible travel.",
			},
			{
				property: "og:title",
				content: "I Am Puri - Authentic & Unique Experiences",
			},
			{
				property: "og:description",
				content:
					"Connect with local experts in Puri, who can provide you with authentic and unique experiences that align with the principles of responsible travel.",
			},
			{
				property: "og:image",
				content: "https://iampuri.com/herocopy.png",
			},
			{
				property: "og:url",
				content: "https://iampuri.com/",
			},
			{
				name: "twitter:card",
				content: "summary_large_image",
			},
			{
				name: "twitter:title",
				content: "I Am Puri - Authentic & Unique Experiences",
			},
			{
				name: "twitter:description",
				content:
					"Connect with local experts in Puri, who can provide you with authentic and unique experiences that align with the principles of responsible travel.",
			},
			{
				name: "twitter:image",
				content: "https://iampuri.com/herocopy.png",
			},
		],
	});

	const isMailSent = ref(false);
	const isModalActive = ref(false);
	const sendMsgBtnTxt = ref("Confirm booking");

	const booking = reactive({
		date: "",
		guest_count: 1,
		service: "",
		guest_name: "",
		guest_email: "",
		guest_phone: "",
	});

	const showBookingModal = (val) => {
		console.log(val);
		booking.service = val;
		isModalActive.value = true;
	};

	const sendMessage = async () => {
		console.log(booking);
		sendMsgBtnTxt.value = "Booking...";
		let { data } = await useFetch(
			`/api/sendgrid?email=${booking.guest_email}&guest_count=${booking.guest_count}&phone=${booking.guest_phone}&name=${booking.guest_name}&service=${booking.service}&date=${booking.date}`
		);
		console.log(data.value);
		isMailSent.value = true;

		setTimeout(() => {
			booking.guest_name = "";
			booking.guest_email = "";
			booking.guest_phone = "";
			booking.guest_count = 1;
			booking.service = "";
			booking.date = "";
			sendMsgBtnTxt.value = "Confirm booking";
			isMailSent.value = false;
			isModalActive.value = false;
		}, 5000);
	};

	const clearForm = () => {
		booking.guest_name = "";
		booking.guest_email = "";
		booking.guest_phone = "";
		booking.guest_count = 1;
		booking.service = "";
		booking.date = "";
		sendMsgBtnTxt.value = "Confirm booking";
		isMailSent.value = false;
		isModalActive.value = false;
	};
</script>
