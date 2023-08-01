import Image from 'next/image'
import img1 from "../../public/1.jpg";
import img2 from "../../public/2.jpg";
import img3 from "../../public/3.jpg";
import img4 from "../../public/4.jpg";
import img5 from "../../public/5.jpg";
import img6 from "../../public/21.jpg";
import img7 from "../../public/18.jpg";
import img8 from "../../public/8.jpg";
import img9 from "../../public/9.jpg";
import img10 from "../../public/10.jpg";
import img11 from "../../public/16.jpg";
import img12 from "../../public/12.jpg";
import img13 from "../../public/13.jpg";
import img14 from "../../public/14.jpg";
import img15 from "../../public/15.jpg";
import img16 from "../../public/20.jpg";
import clsx from "clsx";
import "./beatingheart.css";
import { useState } from "react";

export type Variants = "normal" | "inverted";

export const variantStyle: { [key in Variants]: string } = {
  normal: "text-right sm:col-start-5 sm:col-end-11",
  inverted: "text-left sm:col-start-1 sm:col-end-7",
};

export const imageVariantSryle: { [key in Variants]: string } = {
  normal: "sm:col-start-1 sm:col-end-6",
  inverted: "sm:col-start-6 sm:col-end-11",
};

export default function Home() {
  return (
    <main>
      <div className="bg-dkblue">
        <section id="projects" className="py-16 px-4 max-w-[1200px] mx-auto">
          <h2 className="leading-normal text-4xl mb-14 justify-center text-center">
            Happy birthday Babyeno
            <div className="box">
              <div className="rectangle1"></div>
            </div>
          </h2>
          <article className="sm:grid sm:grid-cols-10 gap-4">
            <div
              data-testid="project wrapper"
              className={clsx(
                "order-2 sm:row-start-1 sm:row-end-2",
                variantStyle["normal"]
              )}
            >
              <h4>Arogitua</h4>
              <h3 className="text-aqua text-2xl font-bold">My everything</h3>
              <p className="bg-black p-4 rounded-lg text-base text-white leading-6 text-left">
                Happy birthday i hope you have the best day today and i hope
                everything goes so good for you , Thank you sm for everything i
                love you so much you deserve the world your always there for me
                so ima always be there for you and if u ever feel upset you can
                always come back to this website and know that i always will
                love you you can also come back to me and you can talk about
                whats making you upset and ill always listen to you. Your
                literally so perfect , i had to change the lyrics in some parts
                cause they fit better😇 but i hope you have so much fun today
                and get to hang out with friends and family i wish i were able
                to hang out with you as well😣 im so glad i met you , i
                don&apos;t know what i would do without you. You helped me out
                so much i for real wish i could hug you , your my favorite
                person in this world and nothing can change that.
              </p>
              <p hidden={true} className="sm:col-start-1 sm:col-end-7"></p>
              <p hidden={true} className="sm:col-start-6 sm:col-end-11"></p>
            </div>
            <div
              className={clsx(
                "mt-8 mx-0 mb-16 border-l border-aqua border-solid border-t rounded-3xl p-4 sm:row-start-1 sm:row-end-2",
                imageVariantSryle["normal"]
              )}
            >
              <Image
                width={584}
                height={358}
                src={img1}
                alt={`Screenshot of `}
              />
            </div>
          </article>
          <article className="sm:grid sm:grid-cols-10 gap-4">
            <div
              data-testid="project wrapper"
              className={clsx(
                "order-2 sm:row-start-1 sm:row-end-2",
                variantStyle["inverted"]
              )}
            >
              <h4>🌬️ I love your farts 😊</h4>
              <h3 className="text-aqua text-2xl font-bold">
                💭 I love sharing my dreams with you 💕
              </h3>
              <p
                className="bg-black p-4 rounded-lg text-base text-white leading-6 text-left"
                dangerouslySetInnerHTML={{
                  __html: `📸 I love our memories together 📸<br>
                  😄 I love how happy you make me 😄<br>
🔥 You are so sexy 🔥<br>
🌟 You are the light of my life ✨<br>
☀️ You are the sun of my sky ☀️<br>
⚡️ I love your energy ⚡️<br>
🤗 I love how you take care of me 🤗<br>
💑 I love being with you 💑<br>
                  `,
                }}
              ></p>
              <p hidden={true} className="sm:col-start-1 sm:col-end-7"></p>
              <p hidden={true} className="sm:col-start-6 sm:col-end-11"></p>
            </div>
            <div
              className={clsx(
                "mt-8 mx-0 mb-16 border-l border-aqua border-solid border-t rounded-3xl p-4 sm:row-start-1 sm:row-end-2",
                imageVariantSryle["inverted"]
              )}
            >
              <Image
                width={584}
                height={358}
                src={img2}
                alt={`Screenshot of `}
              />
            </div>
          </article>
          <article className="sm:grid sm:grid-cols-10 gap-4">
            <div
              data-testid="project wrapper"
              className={clsx(
                "order-2 sm:row-start-1 sm:row-end-2",
                variantStyle["normal"]
              )}
            >
              <h4>Present</h4>
              <h3 className="text-aqua text-2xl font-bold">My Bunny</h3>
              <p className="bg-black p-4 rounded-lg text-base text-white leading-6 text-left">
                🌟 Everyday is special with you, but today is Extra special
                because it&apos;s the day you were born! 🎉 Happy birthday to
                the love of my life! ❤️ Thank you for being the best lover,
                friend, and soulmate whom I can be forever grateful for. 🥰 You
                have put in so much effort to ensure I&apos;m a happy, better
                version of myself. 🌻 You&apos;ve taught me to grow better &
                encouraged me every single time when I feel low. 💪 I just want
                you to know that you are the most important person in my life,
                and I never want to lose you. 💕 On this special day, I wish you
                nothing but every happiness and joy in your life ahead. 🎂 I
                just want to say that I am deeply, truly, and completely in love
                with you. 😍 I Love you, Dear. 💖
              </p>
              <p hidden={true} className="sm:col-start-1 sm:col-end-7"></p>
              <p hidden={true} className="sm:col-start-6 sm:col-end-11"></p>
            </div>
            <div
              className={clsx(
                "mt-8 mx-0 mb-16 border-l border-aqua border-solid border-t rounded-3xl p-4 sm:row-start-1 sm:row-end-2",
                imageVariantSryle["normal"]
              )}
            >
              <Image
                width={584}
                height={358}
                src={img3}
                alt={`Screenshot of `}
              />
            </div>
          </article>
          <article className="sm:grid sm:grid-cols-10 gap-4">
            <div
              data-testid="project wrapper"
              className={clsx(
                "order-2 sm:row-start-1 sm:row-end-2",
                variantStyle["inverted"]
              )}
            >
              <h4>In Our Future House</h4>
              <h3 className="text-aqua text-2xl font-bold">yelijoche enat</h3>
              <p
                className="bg-black p-4 rounded-lg text-base text-white leading-6 text-left"
                dangerouslySetInnerHTML={{
                  __html: `I&apos;ll wake you up with some breakfast in bed <br> I&apos;ll
                bring you coffee with a kiss on your head<br>  And I&apos;ll take
                the kids to school <br> Wave them goodbye <br>  And I&apos;ll thank my
                lucky stars for that night <br>  When you looked over your shoulder<br> 
                For a minute, I forget that I&apos;m older<br>  I wanna dance with
                you right now<br>  Oh, and you look as beautiful as ever<br>  And I swear
                that everyday you&apos;ll get better<br>  You make me feel this way
                somehow<br>  I&apos;m so in love with you<br>  And I hope you know<br> 
                Darling, your love is more than worth its weight in gold<br> 
                We&apos;ve come so far, my dear<br>  Look how we&apos;ve grown<br>  And I
                wanna stay with you until we&apos;re grey and old<br>  Just say you
                won&apos;t let go<br>  Just say you won&apos;t let go<br>  I wanna live
                with you<br>  Even when we&apos;re ghosts<br>  &apos;Cause you were always
                there for me when I needed you most<br>  I&apos;m gonna love you
                &apos;til<br>  My lungs give out<br>  I promise &apos;til death we part
                like in our vows`,
                }}
              ></p>
              <p hidden={true} className="sm:col-start-1 sm:col-end-7"></p>
              <p hidden={true} className="sm:col-start-6 sm:col-end-11"></p>
            </div>
            <div
              className={clsx(
                "mt-8 mx-0 mb-16 border-l border-aqua border-solid border-t rounded-3xl p-4 sm:row-start-1 sm:row-end-2",
                imageVariantSryle["inverted"]
              )}
            >
              <Image
                width={584}
                height={358}
                src={img4}
                alt={`Screenshot of `}
              />
            </div>
          </article>
          <article className="sm:grid sm:grid-cols-10 gap-4">
            <div
              data-testid="project wrapper"
              className={clsx(
                "order-2 sm:row-start-1 sm:row-end-2",
                variantStyle["normal"]
              )}
            >
              <h4>Present</h4>
              <h3 className="text-aqua text-2xl font-bold">My Bunny</h3>
              <p className="bg-black p-4 rounded-lg text-base text-white leading-6 text-left">
                🌟 Everyday is special with you, but today is Extra special
                because it&apos;s the day you were born! 🎉 Happy birthday to
                the love of my life! ❤️ Thank you for being the best lover,
                friend, and soulmate whom I can be forever grateful for. 🥰 You
                have put in so much effort to ensure I&apos;m a happy, better
                version of myself. 🌻 You&apos;ve taught me to grow better &
                encouraged me every single time when I feel low. 💪 I just want
                you to know that you are the most important person in my life,
                and I never want to lose you. 💕 On this special day, I wish you
                nothing but every happiness and joy in your life ahead. 🎂 I
                just want to say that I am deeply, truly, and completely in love
                with you. 😍 I Love you, Dear. 💖
              </p>
              <p hidden={true} className="sm:col-start-1 sm:col-end-7"></p>
              <p hidden={true} className="sm:col-start-6 sm:col-end-11"></p>
            </div>
            <div
              className={clsx(
                "mt-8 mx-0 mb-16 border-l border-aqua border-solid border-t rounded-3xl p-4 sm:row-start-1 sm:row-end-2",
                imageVariantSryle["normal"]
              )}
            >
              <Image
                width={584}
                height={358}
                src={img5}
                alt={`Screenshot of `}
              />
            </div>
          </article>
          <article className="sm:grid sm:grid-cols-10 gap-4">
            <div
              data-testid="project wrapper"
              className={clsx(
                "order-2 sm:row-start-1 sm:row-end-2",
                variantStyle["inverted"]
              )}
            >
              <h4>In Our Future House</h4>
              <h3 className="text-aqua text-2xl font-bold">yelijoche enat</h3>
              <p
                className="bg-black p-4 rounded-lg text-base text-white leading-6 text-left"
                dangerouslySetInnerHTML={{
                  __html: `I&apos;ll wake you up with some breakfast in bed <br> I&apos;ll
                bring you coffee with a kiss on your head<br>  And I&apos;ll take
                the kids to school <br> Wave them goodbye <br>  And I&apos;ll thank my
                lucky stars for that night <br>  When you looked over your shoulder<br> 
                For a minute, I forget that I&apos;m older<br>  I wanna dance with
                you right now<br>  Oh, and you look as beautiful as ever<br>  And I swear
                that everyday you&apos;ll get better<br>  You make me feel this way
                somehow<br>  I&apos;m so in love with you<br>  And I hope you know<br> 
                Darling, your love is more than worth its weight in gold<br> 
                We&apos;ve come so far, my dear<br>  Look how we&apos;ve grown<br>  And I
                wanna stay with you until we&apos;re grey and old<br>  Just say you
                won&apos;t let go<br>  Just say you won&apos;t let go<br>  I wanna live
                with you<br>  Even when we&apos;re ghosts<br>  &apos;Cause you were always
                there for me when I needed you most<br>  I&apos;m gonna love you
                &apos;til<br>  My lungs give out<br>  I promise &apos;til death we part
                like in our vows`,
                }}
              ></p>
              <p hidden={true} className="sm:col-start-1 sm:col-end-7"></p>
              <p hidden={true} className="sm:col-start-6 sm:col-end-11"></p>
            </div>
            <div
              className={clsx(
                "mt-8 mx-0 mb-16 border-l border-aqua border-solid border-t rounded-3xl p-4 sm:row-start-1 sm:row-end-2",
                imageVariantSryle["inverted"]
              )}
            >
              <Image
                width={584}
                height={358}
                src={img6}
                alt={`Screenshot of `}
              />
            </div>
          </article>
          <article className="sm:grid sm:grid-cols-10 gap-4">
            <div
              data-testid="project wrapper"
              className={clsx(
                "order-2 sm:row-start-1 sm:row-end-2",
                variantStyle["normal"]
              )}
            >
              <h4>Present</h4>
              <h3 className="text-aqua text-2xl font-bold">My Bunny</h3>
              <p className="bg-black p-4 rounded-lg text-base text-white leading-6 text-left">
                🌟 Everyday is special with you, but today is Extra special
                because it&apos;s the day you were born! 🎉 Happy birthday to
                the love of my life! ❤️ Thank you for being the best lover,
                friend, and soulmate whom I can be forever grateful for. 🥰 You
                have put in so much effort to ensure I&apos;m a happy, better
                version of myself. 🌻 You&apos;ve taught me to grow better &
                encouraged me every single time when I feel low. 💪 I just want
                you to know that you are the most important person in my life,
                and I never want to lose you. 💕 On this special day, I wish you
                nothing but every happiness and joy in your life ahead. 🎂 I
                just want to say that I am deeply, truly, and completely in love
                with you. 😍 I Love you, Dear. 💖
              </p>
              <p hidden={true} className="sm:col-start-1 sm:col-end-7"></p>
              <p hidden={true} className="sm:col-start-6 sm:col-end-11"></p>
            </div>
            <div
              className={clsx(
                "mt-8 mx-0 mb-16 border-l border-aqua border-solid border-t rounded-3xl p-4 sm:row-start-1 sm:row-end-2",
                imageVariantSryle["normal"]
              )}
            >
              <Image
                width={584}
                height={358}
                src={img7}
                alt={`Screenshot of `}
              />
            </div>
          </article>
          <article className="sm:grid sm:grid-cols-10 gap-4">
            <div
              data-testid="project wrapper"
              className={clsx(
                "order-2 sm:row-start-1 sm:row-end-2",
                variantStyle["inverted"]
              )}
            >
              <h4>In Our Future House</h4>
              <h3 className="text-aqua text-2xl font-bold">yelijoche enat</h3>
              <p
                className="bg-black p-4 rounded-lg text-base text-white leading-6 text-left"
                dangerouslySetInnerHTML={{
                  __html: `I&apos;ll wake you up with some breakfast in bed <br> I&apos;ll
                bring you coffee with a kiss on your head<br>  And I&apos;ll take
                the kids to school <br> Wave them goodbye <br>  And I&apos;ll thank my
                lucky stars for that night <br>  When you looked over your shoulder<br> 
                For a minute, I forget that I&apos;m older<br>  I wanna dance with
                you right now<br>  Oh, and you look as beautiful as ever<br>  And I swear
                that everyday you&apos;ll get better<br>  You make me feel this way
                somehow<br>  I&apos;m so in love with you<br>  And I hope you know<br> 
                Darling, your love is more than worth its weight in gold<br> 
                We&apos;ve come so far, my dear<br>  Look how we&apos;ve grown<br>  And I
                wanna stay with you until we&apos;re grey and old<br>  Just say you
                won&apos;t let go<br>  Just say you won&apos;t let go<br>  I wanna live
                with you<br>  Even when we&apos;re ghosts<br>  &apos;Cause you were always
                there for me when I needed you most<br>  I&apos;m gonna love you
                &apos;til<br>  My lungs give out<br>  I promise &apos;til death we part
                like in our vows`,
                }}
              ></p>
              <p hidden={true} className="sm:col-start-1 sm:col-end-7"></p>
              <p hidden={true} className="sm:col-start-6 sm:col-end-11"></p>
            </div>
            <div
              className={clsx(
                "mt-8 mx-0 mb-16 border-l border-aqua border-solid border-t rounded-3xl p-4 sm:row-start-1 sm:row-end-2",
                imageVariantSryle["inverted"]
              )}
            >
              <Image
                width={584}
                height={358}
                src={img8}
                alt={`Screenshot of `}
              />
            </div>
          </article>
          <article className="sm:grid sm:grid-cols-10 gap-4">
            <div
              data-testid="project wrapper"
              className={clsx(
                "order-2 sm:row-start-1 sm:row-end-2",
                variantStyle["normal"]
              )}
            >
              <h4>Present</h4>
              <h3 className="text-aqua text-2xl font-bold">My Bunny</h3>
              <p className="bg-black p-4 rounded-lg text-base text-white leading-6 text-left">
                🌟 Everyday is special with you, but today is Extra special
                because it&apos;s the day you were born! 🎉 Happy birthday to
                the love of my life! ❤️ Thank you for being the best lover,
                friend, and soulmate whom I can be forever grateful for. 🥰 You
                have put in so much effort to ensure I&apos;m a happy, better
                version of myself. 🌻 You&apos;ve taught me to grow better &
                encouraged me every single time when I feel low. 💪 I just want
                you to know that you are the most important person in my life,
                and I never want to lose you. 💕 On this special day, I wish you
                nothing but every happiness and joy in your life ahead. 🎂 I
                just want to say that I am deeply, truly, and completely in love
                with you. 😍 I Love you, Dear. 💖
              </p>
              <p hidden={true} className="sm:col-start-1 sm:col-end-7"></p>
              <p hidden={true} className="sm:col-start-6 sm:col-end-11"></p>
            </div>
            <div
              className={clsx(
                "mt-8 mx-0 mb-16 border-l border-aqua border-solid border-t rounded-3xl p-4 sm:row-start-1 sm:row-end-2",
                imageVariantSryle["normal"]
              )}
            >
              <Image
                width={584}
                height={358}
                src={img9}
                alt={`Screenshot of `}
              />
            </div>
          </article>
          <article className="sm:grid sm:grid-cols-10 gap-4">
            <div
              data-testid="project wrapper"
              className={clsx(
                "order-2 sm:row-start-1 sm:row-end-2",
                variantStyle["inverted"]
              )}
            >
              <h4>In Our Future House</h4>
              <h3 className="text-aqua text-2xl font-bold">yelijoche enat</h3>
              <p
                className="bg-black p-4 rounded-lg text-base text-white leading-6 text-left"
                dangerouslySetInnerHTML={{
                  __html: `I&apos;ll wake you up with some breakfast in bed <br> I&apos;ll
                bring you coffee with a kiss on your head<br>  And I&apos;ll take
                the kids to school <br> Wave them goodbye <br>  And I&apos;ll thank my
                lucky stars for that night <br>  When you looked over your shoulder<br> 
                For a minute, I forget that I&apos;m older<br>  I wanna dance with
                you right now<br>  Oh, and you look as beautiful as ever<br>  And I swear
                that everyday you&apos;ll get better<br>  You make me feel this way
                somehow<br>  I&apos;m so in love with you<br>  And I hope you know<br> 
                Darling, your love is more than worth its weight in gold<br> 
                We&apos;ve come so far, my dear<br>  Look how we&apos;ve grown<br>  And I
                wanna stay with you until we&apos;re grey and old<br>  Just say you
                won&apos;t let go<br>  Just say you won&apos;t let go<br>  I wanna live
                with you<br>  Even when we&apos;re ghosts<br>  &apos;Cause you were always
                there for me when I needed you most<br>  I&apos;m gonna love you
                &apos;til<br>  My lungs give out<br>  I promise &apos;til death we part
                like in our vows`,
                }}
              ></p>
              <p hidden={true} className="sm:col-start-1 sm:col-end-7"></p>
              <p hidden={true} className="sm:col-start-6 sm:col-end-11"></p>
            </div>
            <div
              className={clsx(
                "mt-8 mx-0 mb-16 border-l border-aqua border-solid border-t rounded-3xl p-4 sm:row-start-1 sm:row-end-2",
                imageVariantSryle["inverted"]
              )}
            >
              <Image
                width={584}
                height={358}
                src={img10}
                alt={`Screenshot of `}
              />
            </div>
          </article>
          <article className="sm:grid sm:grid-cols-10 gap-4">
            <div
              data-testid="project wrapper"
              className={clsx(
                "order-2 sm:row-start-1 sm:row-end-2",
                variantStyle["normal"]
              )}
            >
              <h4>Present</h4>
              <h3 className="text-aqua text-2xl font-bold">My Bunny</h3>
              <p className="bg-black p-4 rounded-lg text-base text-white leading-6 text-left">
                🌟 Everyday is special with you, but today is Extra special
                because it&apos;s the day you were born! 🎉 Happy birthday to
                the love of my life! ❤️ Thank you for being the best lover,
                friend, and soulmate whom I can be forever grateful for. 🥰 You
                have put in so much effort to ensure I&apos;m a happy, better
                version of myself. 🌻 You&apos;ve taught me to grow better &
                encouraged me every single time when I feel low. 💪 I just want
                you to know that you are the most important person in my life,
                and I never want to lose you. 💕 On this special day, I wish you
                nothing but every happiness and joy in your life ahead. 🎂 I
                just want to say that I am deeply, truly, and completely in love
                with you. 😍 I Love you, Dear. 💖
              </p>
              <p hidden={true} className="sm:col-start-1 sm:col-end-7"></p>
              <p hidden={true} className="sm:col-start-6 sm:col-end-11"></p>
            </div>
            <div
              className={clsx(
                "mt-8 mx-0 mb-16 border-l border-aqua border-solid border-t rounded-3xl p-4 sm:row-start-1 sm:row-end-2",
                imageVariantSryle["normal"]
              )}
            >
              <Image
                width={584}
                height={358}
                src={img11}
                alt={`Screenshot of `}
              />
            </div>
          </article>
          <article className="sm:grid sm:grid-cols-10 gap-4">
            <div
              data-testid="project wrapper"
              className={clsx(
                "order-2 sm:row-start-1 sm:row-end-2",
                variantStyle["inverted"]
              )}
            >
              <h4>In Our Future House</h4>
              <h3 className="text-aqua text-2xl font-bold">yelijoche enat</h3>
              <p
                className="bg-black p-4 rounded-lg text-base text-white leading-6 text-left"
                dangerouslySetInnerHTML={{
                  __html: `I&apos;ll wake you up with some breakfast in bed <br> I&apos;ll
                bring you coffee with a kiss on your head<br>  And I&apos;ll take
                the kids to school <br> Wave them goodbye <br>  And I&apos;ll thank my
                lucky stars for that night <br>  When you looked over your shoulder<br> 
                For a minute, I forget that I&apos;m older<br>  I wanna dance with
                you right now<br>  Oh, and you look as beautiful as ever<br>  And I swear
                that everyday you&apos;ll get better<br>  You make me feel this way
                somehow<br>  I&apos;m so in love with you<br>  And I hope you know<br> 
                Darling, your love is more than worth its weight in gold<br> 
                We&apos;ve come so far, my dear<br>  Look how we&apos;ve grown<br>  And I
                wanna stay with you until we&apos;re grey and old<br>  Just say you
                won&apos;t let go<br>  Just say you won&apos;t let go<br>  I wanna live
                with you<br>  Even when we&apos;re ghosts<br>  &apos;Cause you were always
                there for me when I needed you most<br>  I&apos;m gonna love you
                &apos;til<br>  My lungs give out<br>  I promise &apos;til death we part
                like in our vows`,
                }}
              ></p>
              <p hidden={true} className="sm:col-start-1 sm:col-end-7"></p>
              <p hidden={true} className="sm:col-start-6 sm:col-end-11"></p>
            </div>
            <div
              className={clsx(
                "mt-8 mx-0 mb-16 border-l border-aqua border-solid border-t rounded-3xl p-4 sm:row-start-1 sm:row-end-2",
                imageVariantSryle["inverted"]
              )}
            >
              <Image
                width={584}
                height={358}
                src={img12}
                alt={`Screenshot of `}
              />
            </div>
          </article>
          <article className="sm:grid sm:grid-cols-10 gap-4">
            <div
              data-testid="project wrapper"
              className={clsx(
                "order-2 sm:row-start-1 sm:row-end-2",
                variantStyle["normal"]
              )}
            >
              <h4>Present</h4>
              <h3 className="text-aqua text-2xl font-bold">My Bunny</h3>
              <p className="bg-black p-4 rounded-lg text-base text-white leading-6 text-left">
                🌟 Everyday is special with you, but today is Extra special
                because it&apos;s the day you were born! 🎉 Happy birthday to
                the love of my life! ❤️ Thank you for being the best lover,
                friend, and soulmate whom I can be forever grateful for. 🥰 You
                have put in so much effort to ensure I&apos;m a happy, better
                version of myself. 🌻 You&apos;ve taught me to grow better &
                encouraged me every single time when I feel low. 💪 I just want
                you to know that you are the most important person in my life,
                and I never want to lose you. 💕 On this special day, I wish you
                nothing but every happiness and joy in your life ahead. 🎂 I
                just want to say that I am deeply, truly, and completely in love
                with you. 😍 I Love you, Dear. 💖
              </p>
              <p hidden={true} className="sm:col-start-1 sm:col-end-7"></p>
              <p hidden={true} className="sm:col-start-6 sm:col-end-11"></p>
            </div>
            <div
              className={clsx(
                "mt-8 mx-0 mb-16 border-l border-aqua border-solid border-t rounded-3xl p-4 sm:row-start-1 sm:row-end-2",
                imageVariantSryle["normal"]
              )}
            >
              <Image
                width={584}
                height={358}
                src={img16}
                alt={`Screenshot of `}
              />
            </div>
          </article>
          <article className="sm:grid sm:grid-cols-10 gap-4">
            <div
              data-testid="project wrapper"
              className={clsx(
                "order-2 sm:row-start-1 sm:row-end-2",
                variantStyle["inverted"]
              )}
            >
              <h4>In Our Future House</h4>
              <h3 className="text-aqua text-2xl font-bold">yelijoche enat</h3>
              <p
                className="bg-black p-4 rounded-lg text-base text-white leading-6 text-left"
                dangerouslySetInnerHTML={{
                  __html: `I&apos;ll wake you up with some breakfast in bed <br> I&apos;ll
                bring you coffee with a kiss on your head<br>  And I&apos;ll take
                the kids to school <br> Wave them goodbye <br>  And I&apos;ll thank my
                lucky stars for that night <br>  When you looked over your shoulder<br> 
                For a minute, I forget that I&apos;m older<br>  I wanna dance with
                you right now<br>  Oh, and you look as beautiful as ever<br>  And I swear
                that everyday you&apos;ll get better<br>  You make me feel this way
                somehow<br>  I&apos;m so in love with you<br>  And I hope you know<br> 
                Darling, your love is more than worth its weight in gold<br> 
                We&apos;ve come so far, my dear<br>  Look how we&apos;ve grown<br>  And I
                wanna stay with you until we&apos;re grey and old<br>  Just say you
                won&apos;t let go<br>  Just say you won&apos;t let go<br>  I wanna live
                with you<br>  Even when we&apos;re ghosts<br>  &apos;Cause you were always
                there for me when I needed you most<br>  I&apos;m gonna love you
                &apos;til<br>  My lungs give out<br>  I promise &apos;til death we part
                like in our vows`,
                }}
              ></p>
              <p hidden={true} className="sm:col-start-1 sm:col-end-7"></p>
              <p hidden={true} className="sm:col-start-6 sm:col-end-11"></p>
            </div>
            <div
              className={clsx(
                "mt-8 mx-0 mb-16 border-l border-aqua border-solid border-t rounded-3xl p-4 sm:row-start-1 sm:row-end-2",
                imageVariantSryle["inverted"]
              )}
            >
              <Image
                width={584}
                height={358}
                src={img13}
                alt={`Screenshot of `}
              />
            </div>
          </article>
          <article className="sm:grid sm:grid-cols-10 gap-4">
            <div
              data-testid="project wrapper"
              className={clsx(
                "order-2 sm:row-start-1 sm:row-end-2",
                variantStyle["normal"]
              )}
            >
              <h4>Present</h4>
              <h3 className="text-aqua text-2xl font-bold">My Bunny</h3>
              <p className="bg-black p-4 rounded-lg text-base text-white leading-6 text-left">
                🌟 Everyday is special with you, but today is Extra special
                because it&apos;s the day you were born! 🎉 Happy birthday to
                the love of my life! ❤️ Thank you for being the best lover,
                friend, and soulmate whom I can be forever grateful for. 🥰 You
                have put in so much effort to ensure I&apos;m a happy, better
                version of myself. 🌻 You&apos;ve taught me to grow better &
                encouraged me every single time when I feel low. 💪 I just want
                you to know that you are the most important person in my life,
                and I never want to lose you. 💕 On this special day, I wish you
                nothing but every happiness and joy in your life ahead. 🎂 I
                just want to say that I am deeply, truly, and completely in love
                with you. 😍 I Love you, Dear. 💖
              </p>
              <p hidden={true} className="sm:col-start-1 sm:col-end-7"></p>
              <p hidden={true} className="sm:col-start-6 sm:col-end-11"></p>
            </div>
            <div
              className={clsx(
                "mt-8 mx-0 mb-16 border-l border-aqua border-solid border-t rounded-3xl p-4 sm:row-start-1 sm:row-end-2",
                imageVariantSryle["normal"]
              )}
            >
              <Image
                width={584}
                height={358}
                src={img14}
                alt={`Screenshot of `}
              />
            </div>
          </article>
          <article className="sm:grid sm:grid-cols-10 gap-4">
            <div
              data-testid="project wrapper"
              className={clsx(
                "order-2 sm:row-start-1 sm:row-end-2",
                variantStyle["inverted"]
              )}
            >
              <h4>In Our Future House</h4>
              <h3 className="text-aqua text-2xl font-bold">yelijoche enat</h3>
              <p
                className="bg-black p-4 rounded-lg text-base text-white leading-6 text-left"
                dangerouslySetInnerHTML={{
                  __html: `I&apos;ll wake you up with some breakfast in bed <br> I&apos;ll
                bring you coffee with a kiss on your head<br>  And I&apos;ll take
                the kids to school <br> Wave them goodbye <br>  And I&apos;ll thank my
                lucky stars for that night <br>  When you looked over your shoulder<br> 
                For a minute, I forget that I&apos;m older<br>  I wanna dance with
                you right now<br>  Oh, and you look as beautiful as ever<br>  And I swear
                that everyday you&apos;ll get better<br>  You make me feel this way
                somehow<br>  I&apos;m so in love with you<br>  And I hope you know<br> 
                Darling, your love is more than worth its weight in gold<br> 
                We&apos;ve come so far, my dear<br>  Look how we&apos;ve grown<br>  And I
                wanna stay with you until we&apos;re grey and old<br>  Just say you
                won&apos;t let go<br>  Just say you won&apos;t let go<br>  I wanna live
                with you<br>  Even when we&apos;re ghosts<br>  &apos;Cause you were always
                there for me when I needed you most<br>  I&apos;m gonna love you
                &apos;til<br>  My lungs give out<br>  I promise &apos;til death we part
                like in our vows`,
                }}
              ></p>
              <p hidden={true} className="sm:col-start-1 sm:col-end-7"></p>
              <p hidden={true} className="sm:col-start-6 sm:col-end-11"></p>
            </div>
            <div
              className={clsx(
                "mt-8 mx-0 mb-16 border-l border-aqua border-solid border-t rounded-3xl p-4 sm:row-start-1 sm:row-end-2",
                imageVariantSryle["inverted"]
              )}
            >
              <Image
                width={584}
                height={358}
                src={img15}
                alt={`Screenshot of `}
              />
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
