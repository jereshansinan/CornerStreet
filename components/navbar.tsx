"use client";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@heroui/navbar";
import React, { useState, useEffect, useRef } from "react";
import NextLink from "next/link";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Contact", href: "/contact" },
  { label: "Catering", href: "#catering" },
];

const socialLinks = [
  {
    label: "instagram",
    href: "https://www.instagram.com/indiansavourydelights/",
  },
  { label: "linkedin", href: "https://www.linkedin.com" },
  {
    label: "facebook",
    href: "https://www.facebook.com/indiansavourydelights/",
  },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  const menuToggleRef = useRef<HTMLButtonElement | null>(null);
  const menuOverlayRef = useRef<HTMLDivElement | null>(null);
  const menuContentRef = useRef<HTMLDivElement | null>(null);
  const menuPreviewImgRef = useRef<HTMLDivElement | null>(null);
  const menuLinkRefs = useRef<HTMLAnchorElement[]>([]);
  const socialLinkRefs = useRef<HTMLAnchorElement[]>([]);

  const handleClick = () => {
    try {
      router.push("/menu");
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  const openMenu = () => {
    if (isAnimating || isOpen) return;
    setIsAnimating(true);

    /*gsap.to(container, {
      rotation: 10,
      x: 300,
      y: 450,
      scale: 1.5,
      duration: 1.25,
      ease: "power4.inOut",
    });*/

    gsap.to(menuContentRef.current, {
      rotation: 0,
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 1.25,
      ease: "power4.inOut",
    });

    gsap.to([menuLinkRefs.current, socialLinkRefs.current], {
      y: "0%",
      opacity: 1,
      duration: 1,
      delay: 0.75,
      stagger: 0.1,
      ease: "power3.inOut",
    });

    gsap.to(menuOverlayRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)",
      duration: 1.25,
      ease: "power4.inOut",
      onComplete: () => {
        setIsOpen(true);
        setIsAnimating(false);
      },
    });
  };

  const resetPreviewImage = () => {
    if (!menuPreviewImgRef.current) return;
    menuPreviewImgRef.current.innerHTML = "";
    const defaultPreviewImg = document.createElement("img");

    defaultPreviewImg.src = "/biryani.jpg";
    menuPreviewImgRef.current.appendChild(defaultPreviewImg);
  };

  const closeMenu = () => {
    if (isAnimating || !isOpen) return;
    setIsAnimating(true);

    /*gsap.to(container, {
      rotation: 0,
      x: 0,
      y: 0,
      scale: 1,
      duration: 1.25,
      ease: "power4.inOut",
    });
    */

    gsap.to(menuContentRef.current, {
      rotation: -15,
      x: -100,
      y: -100,
      scale: 1.5,
      opacity: 0.25,
      duration: 1.25,
      ease: "power4.inOut",
    });

    gsap.to(menuOverlayRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1.25,
      ease: "power4.inOut",
      onComplete: () => {
        setIsOpen(false);
        setIsAnimating(false);
        gsap.set([menuLinkRefs.current, socialLinkRefs.current], { y: "120%" });
        resetPreviewImage();
      },
    });
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    const cleanupPreviewImage = () => {
      if (!menuPreviewImgRef.current) return;
      const previewImages = menuPreviewImgRef.current.querySelectorAll("img");

      if (previewImages.length > 3) {
        for (let i = 0; i < previewImages.length - 3; i++) {
          menuPreviewImgRef.current.removeChild(previewImages[1]);
        }
      }
    };

    const animateToggle = () => {};

    menuLinkRefs.current.forEach((link) => {
      link.addEventListener("mouseover", () => {
        if (!isOpen || isAnimating) return;

        const imgSrc = link.getAttribute("data-img");

        if (!imgSrc || !menuPreviewImgRef.current) return;

        const previewImages =
          menuPreviewImgRef.current?.querySelectorAll("img");

        if (
          previewImages?.length > 0 &&
          previewImages[previewImages.length - 1].src.endsWith(imgSrc)
        )
          return;

        const newPreviewImg = document.createElement("img");

        newPreviewImg.src = imgSrc;
        newPreviewImg.style.opacity = "0%";
        newPreviewImg.style.transform = "scale(1.25) rotate(10deg)";

        menuPreviewImgRef.current.appendChild(newPreviewImg);
        cleanupPreviewImage();

        gsap.to(newPreviewImg, {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.75,
          ease: "power2.inOut",
        });
      });
    });

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = () => {
    if (!isOpen) openMenu();
    else closeMenu();
  };

  return (
    <>
      <HeroUINavbar
        className={clsx(
          "fixed top-0 left-0 w-full z-50 transition-colors duration-500 py-2 pt-4",
          scrolled ? "bg-[#fef3c7] shadow-md" : "bg-transparent"
        )}
        isBlurred={false}
        isMenuOpen={false}
        maxWidth="full"
      >
        {/* Left - Social Icons */}
        <NavbarContent className="hidden md:flex" justify="start">
          <div
            className={clsx(
              "flex items-center gap-1 sm:gap-1 md:gap-2 lg:gap-4",
              scrolled ? "text-black" : "text-white"
            )}
          >
            <a
              href="https://www.instagram.com/indiansavourydelights/"
              rel="noopener noreferrer"
              target="_blank"
            >
              INSTAGRAM
            </a>
          </div>
        </NavbarContent>

        {/* Center - Logo */}
        <NavbarContent
          className="w-full px-1 md:px-12 flex justify-between items-center md:justify-center"
          justify="center"
        >
          {/* Mobile: MENU button on the left */}
          <div className="md:hidden">
            <button
              className={clsx(
                "px-3 py-2 rounded-full backdrop-blur-md transition-colors duration-300 border text-sm",
                scrolled
                  ? "border-black text-black hover:bg-[#830323] hover:border-[#830323] hover:text-white"
                  : "border-white text-white hover:bg-[#fef3c7] hover:text-black"
              )}
              onClick={handleClick}
            >
              Menu
            </button>
          </div>

          {/* Logo in center */}
          <NavbarBrand className="md:hidden flex-1 flex justify-center">
            <NextLink className="flex justify-center items-center" href="/">
              <h1
                className={clsx(
                  "text-base md:text-3xl leading-tight text-center",
                  scrolled ? "text-black" : "text-white"
                )}
              >
                <span className="block">INDIAN</span>
                <span className="block">SAVOURY</span>
                <span className="block">DELIGHTS</span>
              </h1>
            </NextLink>
          </NavbarBrand>

          <NavbarContent className="hidden md:flex" justify="center">
            <NavbarBrand>
              <NextLink className="flex justify-center items-center" href="/">
                <h1
                  className={clsx(
                    "text-base sm:text-lg md:text-2xl lg:text-2xl xl:text-4xl leading-tight break-words max-w-[160px] sm:max-w-[200px] md:max-w-none",
                    scrolled ? "text-black" : "text-white"
                  )}
                >
                  INDIAN SAVOURY DELIGHTS
                </h1>
              </NextLink>
            </NavbarBrand>
          </NavbarContent>

          {/* Hamburger button on right */}
          <div className="md:hidden">
            <button
              ref={menuToggleRef}
              className={clsx(
                "w-10 h-10 rounded-full flex backdrop-blur-md items-center justify-center border transition-colors duration-300",
                scrolled
                  ? "border-black text-black hover:bg-[#830323] hover:border-[#830323] hover:text-white"
                  : "border-white text-white hover:bg-[#fef3c7] hover:text-black"
              )}
              onClick={handleMenuClick}
            >
              ☰
            </button>
          </div>
        </NavbarContent>

        {/* Right buttons for desktop only */}
        <NavbarContent
          className=" hidden md:flex"
          justify="end"
        >
          <div className="flex items-center gap-1 sm:gap-1 md:gap-1 lg:gap-4">
            <button
              className={clsx(
                "px-3 sm:px-2 md:px-6 py-2 sm:py-2 md:py-4 rounded-full backdrop-blur-md transition-colors duration-300 border text-sm sm:text-base md:text-lg",
                scrolled
                  ? "border-black text-black hover:bg-[#830323] hover:border-[#830323] hover:text-white"
                  : "border-white text-white hover:bg-[#fef3c7] hover:text-black"
              )}
              onClick={handleClick}
            >
              Menu
            </button>

            <button
              ref={menuToggleRef}
              className={clsx(
                "menu-toggle w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex backdrop-blur-md items-center justify-center border transition-colors duration-300",
                scrolled
                  ? "border-black text-black hover:bg-[#830323] hover:border-[#830323] hover:text-white"
                  : "border-white text-white hover:bg-[#fef3c7] hover:text-black"
              )}
              onClick={handleMenuClick}
            >
              ☰
            </button>
          </div>
        </NavbarContent>
      </HeroUINavbar>

      <div ref={menuOverlayRef} className="menu-overlay px-4 md:px-12">
        <button
          className={clsx(
            "absolute top-6 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center border backdrop-blur-md transition-colors duration-300",
            "border-white text-white hover:bg-[#fef3c7] hover:text-black hover:border-[#fef3c7]"
          )}
          onClick={handleMenuClick}
        >
          ✕
        </button>
        <div ref={menuContentRef} className="menu-content">
          <div className="menu-items">
            <div className="col-lg">
              <div ref={menuPreviewImgRef} className="menu-preview-img">
                <img
                  alt="preview"
                  className="w-full h-full object-cover"
                  src="/biryani.jpg"
                />
              </div>
            </div>

            <div className="col-sm">
              <div className="menu-links">
                {menuLinks.map((item, i) => (
                  <h1 key={i} className="link text-white">
                    <Link
                      ref={(el) => {
                        if (el) menuLinkRefs.current[i] = el;
                      }}
                      href={item.href}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </h1>
                ))}
              </div>

              <div className="menu-socials">
                {socialLinks.map((item, i) => (
                  <div key={item.label} className="social text-white">
                    <Link
                      ref={(el) => {
                        if (el) socialLinkRefs.current[i] = el;
                      }}
                      href={item.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="menu-footer">
            <div className="col-lg text-white hidden md:flex">
              <Link href="/">Indian Savoury Delights </Link>
            </div>
            <div className="col-sm text-white">
              <Link href="/">Designed by</Link>
              <Link href="/">Jereshan Sinan</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
