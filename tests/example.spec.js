import { test, expect } from '@playwright/test';


//For variyaslabs


// test('has title', async ({ page }) => {
//   await page.goto('https://variyaslabs.com/');

//   await expect(page).toHaveTitle("Variyas Labs");
// });

// test("logo visibility test", async ({page}) => {
//   await page.goto("https://variyaslabs.com/")

//   await expect(page.getByRole("navigation").getByRole('img', { name: 'Logo' })).toBeVisible();
// });

// test('Home page link test for navigation bar', async ({ page }) => {
//   await page.goto('https://variyaslabs.com/');

//   await page.getByRole("navigation").getByRole('link', { name: "Home" }).click();

// });

// test('about us page link test for navigation bar', async ({ page }) => {
//   await page.goto('https://variyaslabs.com/');

//   await page.getByRole("navigation").getByRole('link', { name: "About Us" }).click();

// });

// test('services page link test for navigation bar', async ({ page }) => {
//   await page.goto('https://variyaslabs.com/');

//   await page.getByRole("navigation").getByRole('link', { name: "Services" }).click();

// });

// test('Industries page link test for navigation bar', async ({ page }) => {
//   await page.goto('https://variyaslabs.com/');

//   await page.getByRole("navigation").getByRole('link', { name: "Industries" }).click();

// });

// test('Technologies page link test for navigation bar', async ({ page }) => {
//   await page.goto('https://variyaslabs.com/');

//   await page.getByRole("navigation").getByRole('link', { name: "Technologies" }).click();

// });

// test('Devops service page link test for navigation bar', async ({ page }) => {
//   await page.goto('https://variyaslabs.com/');

//   await page.getByRole("navigation").getByRole('link', { name: "Devops Service" }).click();

// });

// test('contact-us page link test for navigation bar', async ({ page }) => {
//   await page.goto('https://variyaslabs.com/');

//   await page.getByRole("navigation").getByRole('link', { name: "Contact Us" }).click();

// });

// test('contact-us test for home page', async ({ page }) => {
//   await page.goto('https://variyaslabs.com/');

//   await page.locator("section").getByRole('link', { name: "Contact Us" }).click();

// });

// test('linked-in test', async ({ page }) => {
//   await page.goto('https://variyaslabs.com/');

//   await page.getByRole('link', {name: "ⓒ VARIYAS LABS PRIVATE LIMITED"}).click();

// });


//For youtube

// test("guide button test in top navbar container", async ({page}) => {
//   await page.goto("https://www.youtube.com")

//   await page.getByRole("button", {name: 'Guide'}).click();
// })

// test("home button test in top navbar container", async ({page}) => {
//   await page.goto("https://www.youtube.com")

//   await page.locator("id=start").locator("id=logo").getByTitle("Youtube Home").click();
// })

// test("search box test in top navbar container", async ({page}) => {
//   await page.goto("https://www.youtube.com")

//   const searchInput= page.getByPlaceholder("Search");
//   await searchInput.click();
//   await searchInput.fill("pizza");
//   await searchInput.press("Enter");
// })

// test("voice search button test in top navbar container", async ({page}) => {
//   await page.goto("https://www.youtube.com")

//   await page.locator("id=center").getByRole("button", {name: 'Search with your voice'}).click();
// })

// test("Sign in button test in top navbar container", async ({page}) => {
//   await page.goto("https://www.youtube.com")

//   await page.locator("id=end").getByRole("link", {name: 'Sign in'}).click();
// })

// test("settings button test in top navbar container", async ({page}) => {
//   await page.goto("https://www.youtube.com")

//   await page.locator("id=end").getByRole("button", {name: 'Settings'}).click();
// })

// test("video playing test after searching", async ({page}) => {
//   //test.slow();
//   await page.goto("https://www.youtube.com")

//   const searchInput= page.getByPlaceholder("Search");
//   await searchInput.click();
//   await searchInput.fill("pizza");
//   await searchInput.press("Enter");

//   // await page.locator("ytd-video-renderer").first().waitFor();
//   // await page.locator("ytd-video-renderer").first().click();
//   //await expect(page.locator("video#movie_player")).toBeVisible({timeout: 10000});


//   const firstVideo= page.locator("ytd-video-renderer").first();
//   await firstVideo.locator("id=video-title").click();
  
//   // await page.getByRole("link", {name: /pizza/i}).first().click();

//   // await page.waitForURL(/.*watch.*/);

//   const videoPlayer= page.locator(".html5-video-player.playing-mode", {timeout: 10000});
//   //const videoPlayer= page.locator(".html5-video-player.playing-mode");
//   await expect(videoPlayer).toBeVisible();

//   //await expect(video).toHaveJSProperty("readyState", 4);
// })

async function openGuide(page) {
  const guideButton= page.getByRole("button", {name: "Guide"})
  // await expect(page.locator("#sections a[href='/']")).toBeVisible({timeout: 10000});  
  const sections= page.locator('#sections a[href="/"]');  

  if (!await sections.isVisible({timeout: 10000})) {
    await guideButton.click();
  }

  await expect(sections).toBeVisible()
}


// test("home link from guide button menu test", async ({page}) => {
//   await page.goto("https://www.youtube.com")

//   await openGuide(page);
//   const homelink= page.locator("#sections a[href='/']");
//   await expect(homelink).toBeVisible();
//   // await homelink.click();
//   await homelink.click({force: true});
//   await expect(page).toHaveURL(/youtube\.com\/?(\?.*)?$/);

// })

// test("shorts link from guide button menu test", async ({page}) => {
//   await page.goto("https://www.youtube.com")

//  await openGuide(page);
// //  const homelink= page.locator("#sections a[href='/shorts/']");  
//   const shortsLink= page.locator("#sections").getByTitle("Shorts", {exact: true});
//   await expect(shortsLink).toBeVisible();
//   // await shortsLink.click();
//   await shortsLink.click({force: true});
//   await expect(page).toHaveURL(/youtube\.com\/shorts/);

// })

// test("Subscriptions link from guide button menu test", async ({page}) => {
//   await page.goto("https://www.youtube.com")

//   await openGuide(page);
//   const homelink= page.locator("#sections a[href='/feed/subscriptions']");
//   await expect(homelink).toBeVisible();
//   // await homelink.click();
//   await homelink.click({force: true});

//   await expect(page).toHaveURL(/youtube\.com\/feed\/subscriptions/);

// })

// test("Favourites link from guide button menu test", async ({page}) => {
//   await page.goto("https://www.youtube.com")

//   await openGuide(page);
//   const homelink= page.locator("#sections a[href='/feed/you']");
//   await expect(homelink).toBeVisible();
//   // await homelink.click();
//   await homelink.click({force: true});
//   await expect(page).toHaveURL(/youtube\.com\/feed\/you/);

// })

// test("Shopping link from guide button menu test", async ({page}) => {
//   await page.goto("https://www.youtube.com")

//   await openGuide(page);
//   const explore= page.locator("#sections").getByTitle("Shopping", {exact: true});
//   if (!await expect(explore).toBeVisible()) {
//       await openGuide(page);
//       const explore= page.locator("#sections").getByTitle("Shopping", {exact: true});
//   }
//   await explore.click();
  
// })

// test("Music link from guide button menu test", async ({page}) => {
//   await page.goto("https://www.youtube.com")

//   await openGuide(page);
//   const explore= page.locator("#sections").getByTitle("Music", {exact: true});
//   if (!await expect(explore).toBeVisible()) {
//     await openGuide(page);
//     const explore= page.locator("#sections").getByTitle("Music", {exact: true});
//   }
//   await explore.click();
  
// })

// test("Movies link from guide button menu test", async ({page}) => {
//   await page.goto("https://www.youtube.com")

//   await openGuide(page);
//   const explore= page.locator("#sections").getByTitle("Movies", {exact: true});
//   if (!await expect(explore).toBeVisible()) {
//     await openGuide(page);
//     const explore= page.locator("#sections").getByTitle("Movies", {exact: true});
//   }
//   await explore.click();
  
// })

test("live link after clicking show more from guide button menu test", async ({page}) => {
  await page.goto("https://www.youtube.com")

  await openGuide(page);
  const explore= page.locator("#sections").getByTitle("Show more");
  await expect(explore).toBeVisible();
  await explore.click();
  
  const live= page.locator("#sections").getByTitle("Live");
  await expect(live).toBeVisible();
  await live.click();

})

test("gaming link after clicking show more from guide button menu test", async ({page}) => {
  await page.goto("https://www.youtube.com")

  await openGuide(page);
  const explore= page.locator("#sections").getByTitle("Show more");
  await expect(explore).toBeVisible();
  await explore.click();

  const gaming= page.locator("#sections").getByTitle("Gaming");
  await expect(gaming).toBeVisible();
  await gaming.click();

})

test("news link after clicking show more from guide button menu test", async ({page}) => {
  await page.goto("https://www.youtube.com")

  await openGuide(page);
  const explore= page.locator("#sections").getByTitle("Show more");
  await expect(explore).toBeVisible();
  await explore.click();
  
  const news= page.locator("#sections").getByTitle("News");
  await expect(news).toBeVisible();
  await news.click();

})

test("sports link after clicking show more from guide button menu test", async ({page}) => {
  await page.goto("https://www.youtube.com")

  await openGuide(page);
  const explore= page.locator("#sections").getByTitle("Show more");
  await expect(explore).toBeVisible();
  await explore.click();

  const sports= page.locator("#sections").getByTitle("Sports");
  await expect(sports).toBeVisible();
  await sports.click();
})

test("courses link after clicking show more from guide button menu test", async ({page}) => {
  await page.goto("https://www.youtube.com")

  await openGuide(page);
  const explore= page.locator("#sections").getByTitle("Show more");
  await expect(explore).toBeVisible();
  await explore.click();

  const courses= page.locator("#sections").getByTitle("Courses");
  await expect(courses).toBeVisible();
  await courses.click();

})

test("fashion&beauty link after clicking show more from guide button menu test", async ({page}) => {
  await page.goto("https://www.youtube.com")

  await openGuide(page);
  const explore= page.locator("#sections").getByTitle("Show more");
  await expect(explore).toBeVisible();
  await explore.click();

  const fashion= page.locator("#sections").getByTitle("Fashion&Beauty");
  await expect(fashion).toBeVisible();
  await fashion.click();

})

test("podcasts link after clicking show more from guide button menu test", async ({page}) => {
  await page.goto("https://www.youtube.com")

  await openGuide(page);
  const explore= page.locator("#sections").getByTitle("Show more");
  await expect(explore).toBeVisible();
  await explore.click();

  const podcasts= page.locator("#sections").getByTitle("Podcsats");
  await expect(podcasts).toBeVisible();
  await podcasts.click();

})

test("playables link after clicking show more from guide button menu test", async ({page}) => {
  await page.goto("https://www.youtube.com")

  await openGuide(page);
  const explore= page.locator("#sections").getByTitle("Show more");
  await expect(explore).toBeVisible();
  await explore.click();
  
  const Playables= page.locator("#sections").getByTitle("Playables");
  await expect(Playables).toBeVisible();
  await Playables.click();

})
test("show less link after clicking show more from guide button menu test", async ({page}) => {
  await page.goto("https://www.youtube.com")

  await openGuide(page);
  const explore= page.locator("#sections").getByTitle("Show more");
  await expect(explore).toBeVisible();
  await explore.click();
  
  const end_explore= page.locator("#sections").getByTitle("Show less");
  await expect(end_explore).toBeVisible();
  await end_explore.click();
})
