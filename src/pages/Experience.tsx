import { experiences } from '../data/experience';

const Experience = () => (
  <section id="experience" className="py-16 px-6 bg-gray-50">
    <h2 className="text-3xl font-bold mb-6">Experience</h2>
    <ul className="space-y-4">
      {experiences.map((exp) => (
        <li key={exp.title}>
          <h3 className="text-xl font-semibold">{exp.title}</h3>
          <p>{exp.company} • {exp.duration}</p>
          <ul className="list-disc ml-5 text-sm mt-1">
            {exp.details.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </li>
      ))}
    </ul>
  </section>
);

export default Experience;
