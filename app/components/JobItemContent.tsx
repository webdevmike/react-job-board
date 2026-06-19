import { ClockIcon, ValueIcon, DrawingPinIcon } from "@radix-ui/react-icons";
import { useParams } from "react-router";

import BookmarkIcon from "./BookmarkIcon";
import Spinner from "./Spinner";
import Error from "./Error";

import { useJobDetailsQuery } from "~/hooks/useJobDetailsQuery";

export default function JobItemContent() {
  const { id } = useParams();
  const { data: job, isLoading, isError } = useJobDetailsQuery(id);

  if (isLoading) {
    return (
      <section className="job-details">
        <div>
          <Spinner />
        </div>
      </section>
    );
  }

  if (isError) {
    return <Error message="Sorry, could not load jobs." />;
  }

  if (!job) {
    return null;
  }

  return (
    <section className="job-details">
      <div>
        <img src="/job-details.avif" alt="#" />

        <a
          className="apply-btn"
          href="https://fictional9thtechwebsite.com/"
          target="_blank"
        >
          Apply
        </a>

        <section className="job-info">
          <div className="job-info__left">
            <div className="job-info__badge">9T</div>
            <div className="job-info__below-badge">
              <time className="job-info__time">2d</time>

              <BookmarkIcon />
            </div>
          </div>

          <div className="job-info__right">
            <h2 className="second-heading">Front End React Engineer</h2>
            <p className="job-info__company">9th Tech</p>
            <p className="job-info__description">
              Join us as we pursue our disruptive new vision to make machine
              data accessible, usable, and valuable to everyone.
            </p>
            <div className="job-info__extras">
              <p className="job-info__extra">
                <ClockIcon className="job-info__extra-icon" />
                Full-Time
              </p>
              <p className="job-info__extra">
                <ValueIcon className="job-info__extra-icon" />
                $105,000+
              </p>
              <p className="job-info__extra">
                <DrawingPinIcon className="job-info__extra-icon" />
                Global
              </p>
            </div>
          </div>
        </section>

        <div className="job-details__other">
          <section className="qualifications">
            <div className="qualifications__left">
              <h4 className="fourth-heading">Qualifications</h4>
              <p className="qualifications__sub-text">
                Other qualifications may apply
              </p>
            </div>
            <ul className="qualifications__list">
              <li className="qualifications__item">React</li>
              <li className="qualifications__item">Next.js</li>
              <li className="qualifications__item">Tailwind CSS</li>
            </ul>
          </section>

          <section className="reviews">
            <div className="reviews__left">
              <h4 className="fourth-heading">Company reviews</h4>
              <p className="reviews__sub-text">
                Recent things people are saying
              </p>
            </div>
            <ul className="reviews__list">
              <li className="reviews__item">Nice building and food also.</li>
              <li className="reviews__item">Great working experience.</li>
            </ul>
          </section>
        </div>

        <footer className="job-details__footer">
          <p className="job-details__footer-text">
            If possible, please reference that you found the job on{" "}
            <span className="u-bold">rmtDev</span>, we would really appreciate
            it!
          </p>
        </footer>
      </div>
    </section>
  );
}
