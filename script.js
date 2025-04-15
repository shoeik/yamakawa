
document.addEventListener('DOMContentLoaded', () => {
	// let mainImage = document.querySelector('.business-imagearea img');
	// const links = document.querySelectorAll('.business-item .business-link');
	// if (links.length > 0) {
	// 	const firstImage = links[0].querySelector('.business-image img');
	// 	if (firstImage) {
	// 		mainImage.src = firstImage.src;
	// 	}
	// }
	// links.forEach(link => {
		
	// 	link.addEventListener('mousemove', (event) => {
	// 		const img = link.querySelector('.business-image img');
	// 		mainImage.src = img.src;
	// 		if (img) {

	// 		}
	// 	});
	
	// 	link.addEventListener('mouseleave', () => {
	// 		const firstImage = links[0].querySelector('.business-image img');
	// 		if (firstImage) {
	// 			mainImage.src = firstImage.src;
	// 		}
	// 	});
	// });
	

	function setupImagePreview() {
		const mainImage = document.querySelector('.technology04-imagearea img');
		const links = document.querySelectorAll('.technology04-item .technology04-link');
	
		if (!mainImage || links.length === 0) return;
	
		const firstImage = links[0].querySelector('.technology04-image img');
		if (firstImage) {
		mainImage.src = firstImage.src;
		}
	
		links.forEach(link => {
		link.addEventListener('mousemove', () => {
			const img = link.querySelector('.technology04-image img');
			if (img) mainImage.src = img.src;
		});
	
		link.addEventListener('mouseleave', () => {
			if (firstImage) mainImage.src = firstImage.src;
		});
		});
	}
	
	// 実行
	setupImagePreview();
		

// max-width: 768pxの条件を作成
const mediaQuery = window.matchMedia('(max-width: 768px)');

// スクロール時のヘッダー操作に必要な変数
let lastScrollY = window.scrollY;
let isHidden = false;

// ヘッダーを表示・非表示するための関数
function handleHeaderVisibility() {
	const header = document.getElementById("header");
	const currentScrollY = window.scrollY;

	if (currentScrollY > lastScrollY + 100 && !isHidden && currentScrollY > window.innerHeight) {
		// 100px以上スクロールダウンでヘッダーを隠す
		header.classList.add("js-hidden");
		isHidden = true;
	} else if (currentScrollY < lastScrollY - 50 && isHidden) {
		// 50px以上スクロールアップでヘッダーを表示
		header.classList.remove("js-hidden");
		isHidden = false;
	}

	// ページトップからスクロールされた場合のクラス設定
	if (window.scrollY > 0) {
		header.classList.add("js-top");
	} else {
		header.classList.remove("js-top");
	}

	lastScrollY = currentScrollY;
}





// PCとSP要素のaria-hidden属性を切り替える関数
function updateAriaHidden() {
	const isPC = window.matchMedia('(min-width: 768px)').matches;
	const pcElements = document.querySelectorAll('.view-pc');
	const spElements = document.querySelectorAll('.view-sp');

	pcElements.forEach(element => {
		element.setAttribute('aria-hidden', isPC ? 'false' : 'true');
	});

	spElements.forEach(element => {
		element.setAttribute('aria-hidden', isPC ? 'true' : 'false');
	});
}

// 初回のaria-hidden属性の更新
updateAriaHidden();



// メディアクエリが変化したときに処理を切り替える関数
function handleMediaQuery(event) {
	const header = document.getElementById("header");

	if (!event.matches) {
		// 768pxを超えている場合、スクロールイベントを有効にする
		window.addEventListener("scroll", handleHeaderVisibility);
	} else {
		// 768px以下の場合、ヘッダー関連の操作を解除
		window.removeEventListener("scroll", handleHeaderVisibility);
		header.classList.remove("js-hidden", "js-top");
	}
}

// 初回のメディアクエリ判定を実行
handleMediaQuery(mediaQuery);

// メディアクエリの状態変化を監視して処理を切り替える
mediaQuery.addEventListener('change', handleMediaQuery);



	




const hamburger = document.querySelector('.header_hamburger');
const nav = document.querySelector('.nav-bar_nav');
const header = document.querySelector(".header");


function adjustNavPosition() {
    if (window.innerWidth <= 768) {
        const headerHeight = header.offsetHeight; // headerの高さを取得
        nav.style.top = `${headerHeight}px`; // navのtopをheaderの高さ分ずらす
    } else {
        nav.style.top = ""; // PC時はtopをリセット
    }
}

hamburger.addEventListener("click", () => {
    if (nav.classList.contains("js-active")) {
        nav.classList.remove("js-active");
		// bodyを取得
		document.body.classList.remove("js-active");
        // menu.classList.remove("header__menu--active");
        hamburger.classList.remove("js-active");
    } else {
        // adjustNavPosition(); // navのtopを調整
        nav.classList.add("js-active");
		document.body.classList.add("js-active");
        // menu.classList.add("header__menu--active");
        hamburger.classList.add("js-active");
    }
});


// 初回ロード時にも適用
// adjustNavPosition();



const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
	header.addEventListener("click", function() {
		const content = this.nextElementSibling;

		// Toggle the 'active' class on the content
		content.classList.toggle("js-active");
	});
});


const logo = document.querySelector(".hero-logo svg");
const minHeight = 40;
const maxScroll = 500;

// ウィンドウ幅に応じた maxHeight を取得
const getMaxHeight = () => {
	return window.matchMedia("(max-width: 1024px)").matches ? 90 : 80;
};

const updateHeight = () => {
	const scrollY = Math.min(window.scrollY, maxScroll);
	const scale = scrollY / maxScroll; // 0～1の値
	const maxHeight = getMaxHeight();
	const newHeight = minHeight + (maxHeight - minHeight) * scale;
	
	logo.style.height = `${newHeight}vw`;
	requestAnimationFrame(updateHeight);
};

requestAnimationFrame(updateHeight);



	// document.addEventListener("scroll", () => {

	// 	const hero = document.querySelector(".hero");
	// 	// const footer = document.querySelector("footer");
	// 	const maxScroll = 2000;

	// 	if (window.scrollY < maxScroll) {
	// 		// hero.style.height = "100vh";
	// 		// hero.style.overflow = "hidden";
	// 		hero.style.position = "fixed";
	// 		// hero.style.top = "0";
	// 		// main.style.width = "100%";
	// 		// footer.style.position = "fixed";
	// 		// footer.style.bottom = "-100%";

	// 		// console.log("scroll");
	// 	} else {
	// 		// main.style.height = "auto";
	// 		// // main.style.overflow = "visible";
	// 		hero.style.position = "relative";
	// 		// footer.style.position = "relative";

	// 		// console.log("non-scroll");
	// 	}
	// });




	const heroSwiper = new Swiper('.hero .swiper', {
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		loop: true,
		loopAdditionalSlides: 1,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
			waitForTransition: false,
		},
		speed: 1000,
		followFinger: false,
		pagination: {
			el: '.hero .swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				// ページネーションの各ドットにSVGを埋め込む
				return `
				<div class="${className}">
				<svg>
					<circle cx="10" cy="10" r="8"></circle>
				</svg>
				</div>`;
			},
		},
	});

	heroSwiper.on('slideChangeTransitionStart', function () {
		// 全ての動画を停止
		// const videos = document.querySelectorAll('video');
		// videos.forEach(video => {
		//   video.pause();
		//   video.currentTime = 0; // 再生位置をリセット
		// });

		// 現在のスライド内の動画を取得して再生
		const activeSlide = heroSwiper.slides[heroSwiper.activeIndex];
		const video = activeSlide.querySelector('video');
		if (video) {
			video.play();
		}
	});
	
	// 初期スライドの動画を再生
	const initialVideo = heroSwiper.slides[heroSwiper.activeIndex].querySelector('video');
	if (initialVideo) {
		initialVideo.play();
	}

	
	const productsSwiper = new Swiper('.products .swiper', {
		slidesPerView: 2,
		spaceBetween: 24,
		grabCursor: true,
		pagination: {
			el: '.products .swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.products .swiper-button-next',
			prevEl: '.products .swiper-button-prev',
		},
		scrollbar : {
			el: '.products .swiper-scrollbar',
			// hide: false,
			draggable: true,
		},
		breakpoints: {
			769: {
				slidesPerView: 3,
				spaceBetween: 32,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 24,
			}
			
		},
	});



	
	
	const cursor = document.querySelector('.custom-cursor');
	// const hoverTargets = document.querySelectorAll('.hover-target');
	const hoverTargets = document.querySelectorAll('a, button');

	
	document.addEventListener('mousemove', (e) => {
		cursor.style.left = e.clientX + 'px';
		cursor.style.top = e.clientY + 'px';
		
		// デフォルトカーソルを非表示
		// document.body.style.cursor = 'none'; 
		
		// cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
		// cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1)`
		
	});
	
	
	const targets = document.querySelectorAll('.js-target');
	
	targets.forEach(target => {
		target.addEventListener('mouseover', function() {
			// cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(5)`
			cursor.classList.add('js-hover');
		});
	
	
		target.addEventListener('mouseout', function() {
			cursor.classList.remove('js-hover');
		});
	});
	
	
	// hover したときにカスタムカーソルを表示
	hoverTargets.forEach(hoverTarget => { 
		hoverTarget.addEventListener('mouseenter', () => {
				cursor.classList.add('js-hover');
		  // cursor.style.display = 'block'; // カスタムカーソルを表示
		  // document.body.style.cursor = 'none'; // デフォルトカーソルを非表示
		});
	
		// hover から外れたときにカスタムカーソルを非表示
		hoverTarget.addEventListener('mouseleave', () => {
		  // cursor.style.display = 'none'; // カスタムカーソルを非表示
				cursor.classList.remove('js-hover');
		  // document.body.style.cursor = 'default'; // デフォルトカーソルを再表示
		});
	});
	
	


	
document.querySelector(".content1").addEventListener("mouseover", function() {
	document.querySelector(".content2").classList.add("js-target");
});
document.querySelector(".content1").addEventListener("mouseleave", function() {
	document.querySelector(".content2").classList.remove("js-target");
});

document.querySelector(".content2").addEventListener("mouseover", function() {
	document.querySelector(".content1").classList.add("js-target");
});
document.querySelector(".content2").addEventListener("mouseleave", function() {
	document.querySelector(".content1").classList.remove("js-target");
});




	// const footerLinksTest = document.querySelector('.footer-links-test');
	// const footerContact = document.querySelector('.footer-links-contact');
	// const footerCompany = document.querySelector('.footer-links-company');

	// footerContact.addEventListener('mouseover', () => {
	// 	footerLinksTest.classList.add('js-f-contact');
	// });
	// footerContact.addEventListener('mouseleave', () => {
	// 	footerLinksTest.classList.remove('js-f-contact');
	// });

	// footerCompany.addEventListener('mouseover', () => {
	// 	footerLinksTest.classList.add('js-f-company');
	// });
	// footerCompany.addEventListener('mouseleave', () => {
	// 	footerLinksTest.classList.remove('js-f-company');
	// });
	


});





window.addEventListener("resize", () => {
	// heroのlogoの高さを調整
	updateHeight();

	// ウィンドウリサイズ時にaria-hidden属性を更新
	updateAriaHidden();

	// 画面リサイズ時にnavの位置を調整
	adjustNavPosition(); 

	// 画面サイズが768px以上になったらナビゲーションを閉じる
	if (window.innerWidth > 768) {
        nav.classList.remove("js-active");
        hamburger.classList.remove("js-active");
    }
});

