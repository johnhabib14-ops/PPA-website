import Link from "next/link";
import { SiteLogo } from "@/components/SiteLogo";
import { CONTACT_HREF, NAV_ITEMS } from "@/lib/nav";
import { siteConfig, fullAddress, googleMapsUrl } from "@/lib/site";

const FOOTER_LEGAL =
  "This website is for informational purposes only and does not establish a provider-patient relationship. If this is an emergency, call 911 or go to the nearest emergency room.";

export function SiteFooter() {
  return (
    <footer className="site-footer footer-dark">
      <div className="site-footer__inner">
        <div>
          <Link className="brand footer-brand" href="/" aria-label={`${siteConfig.name}, home page`}>
            <SiteLogo variant="light" />
          </Link>
          <p className="footer-blurb">{siteConfig.footerBlurb}</p>
        </div>
        <nav aria-label="Footer">
          <p className="footer-heading" id="footer-nav-heading">
            Explore
          </p>
          <ul className="footer-nav-list" aria-labelledby="footer-nav-heading">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
          </ul>
        </nav>
        <div>
          <p className="footer-heading">Contact</p>
          <address className="footer-contact-block">
            <p>{fullAddress()}</p>
            <p>
              Phone:{" "}
              <a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phoneDisplay}</a>
            </p>
            <p>
              Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
            <p>
              <a href={googleMapsUrl()}>Open location in Google Maps</a>
            </p>
            <p>
              <Link href={CONTACT_HREF}>Schedule consultation or send a message</Link>
            </p>
          </address>
        </div>
      </div>
      <div className="site-footer__legal">
        <p>{FOOTER_LEGAL}</p>
      </div>
      <div className="site-footer__base">
        <div className="site-footer__base-inner">
          <Link href="/privacy">Privacy &amp; website notice</Link>
          <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        </div>
      </div>
    </footer>
  );
}
