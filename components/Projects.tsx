import s from "@/styles/Projects.module.scss";

export default function Projects() {
  return (
    <div id="projects" className={s.projects}>
      <div className="container">
        <ul className={s.list}>
          <li className={s.listItem}>
            <h3 className={s.type}>Architecture</h3>
            <div className={s.imgWrapper}>
              <img src="/images/architecture.jpg" alt="Architecture" />
            </div>
            <h4 className={s.title}>Title</h4>
            <p className={s.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, voluptas.
            </p>
          </li>
          <li className={s.listItem}>
            <h3 className={s.type}>Interior</h3>
            <div className={s.imgWrapper}>
              <img src="/images/interior.jpg" alt="Interior" />
            </div>
            <h4 className={s.title}>Title</h4>
            <p className={s.desc}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
              accusamus.
            </p>
          </li>
          <li className={s.listItem}>
            <h3 className={s.type}>Object</h3>
            <div className={s.imgWrapper}>
              <img src="/images/object.jpg" alt="Object" />
            </div>
            <h4 className={s.title}>Title</h4>
            <p className={s.desc}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae, excepturi!
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
