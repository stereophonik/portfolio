import { useContext } from "react";
import { MyExperiencesContext } from "../contexts/MyExperiences";

export default function MyExperiencesComponent(): React.ReactElement {
    const myExperiencesContext: {} = useContext(MyExperiencesContext);

    return (
        <section
            id={myExperiencesContext["section"]["id"]}
            className={myExperiencesContext["section"]["className"]}>
            <h1
                id={myExperiencesContext["h1"]["id"]}
                className={myExperiencesContext["h1"]["className"]}>
                <span
                    id={myExperiencesContext["aaSpan"]["id"]}
                    className={myExperiencesContext["aaSpan"]["className"]}>
                    {myExperiencesContext["aaSpan"]["content"]}
                </span>
                <span
                    id={myExperiencesContext["abSpan"]["id"]}
                    className={myExperiencesContext["abSpan"]["className"]}>
                    {myExperiencesContext["abSpan"]["content"]}
                </span>
            </h1>
            <h2
                id={myExperiencesContext["h2"]["id"]}
                className={myExperiencesContext["h2"]["className"]}>
                {myExperiencesContext["h2"]["content"]}
            </h2>
            <div style={{
                backgroundColor: "#00260F",
                paddingTop: "1vw",
                paddingBottom: "1vw"
            }}>
                <div
                    className="className01Span"
                    style={{
                        color: "#D1D5DB"
                    }}>
                    June 2024 - Present
                </div>
                <div
                    className="className01Span">
                    Frontend Developer
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#D1D5DB"
                    }}>
                    Class Constructions
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#6B7280"
                    }}>
                    Responsible for implementing website updates, including adding and optimizing blog posts and
                    creating
                    tiered links for bathroom categories.
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#6B7280"
                    }}>
                    Managed Contact Us page improvements, including form submission updates and adding contact
                    information to the menu and footer.
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#6B7280"
                    }}>
                    Assisted with updates to the brand story, video integration, and gallery sections.
                </div>
            </div>
            <div style={{
                backgroundColor: "#00260F",
                paddingTop: "1vw",
                paddingBottom: "1vw"
            }}>
                <div
                    className="className01Span"
                    style={{
                        color: "#D1D5DB"
                    }}>
                    August 2022 - August 2024
                </div>
                <div
                    className="className01Span">
                    Automation Tester, QA Lead, English Trainer, Performance Tester
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#D1D5DB"
                    }}>
                    FPT Software
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#6B7280"
                    }}>
                    Led and executed performance, functional, and automation testing for mobile,web, and UI
                    applications.
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#6B7280"
                    }}>
                    Developed and maintained test scripts using LoadRunner, C#, and Java for both manual and automated
                    test execution.
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#6B7280"
                    }}>
                    Provided process automation, app development tasks, and database querying using PostgresSQL to
                    support testing efforts.
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#6B7280"
                    }}>
                    Managed performance and functional testing, including API testing, and provided comprehensive
                    reports to stakeholders.
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#6B7280"
                    }}>
                    Facilitated product demonstrations and contributed to team growth as an English Trainer.
                </div>
            </div>
            <div style={{
                backgroundColor: "#00260F",
                paddingTop: "1vw",
                paddingBottom: "1vw"
            }}>
                <div
                    className="className01Span"
                    style={{
                        color: "#D1D5DB"
                    }}>
                    March 2021 - July 2022
                </div>
                <div
                    className="className01Span">
                    Senior Test Automation Architect
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#D1D5DB"
                    }}>
                    Umpisa Inc
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#6B7280"
                    }}>
                    Led the design, implementation, and management of QA automation projects,focusing on DevOps pipeline
                    integration and process improvement.
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#6B7280"
                    }}>
                    Developed comprehensive testing strategies for mobile and web applications,ensuring accuracy in
                    database migration and automation efforts.
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#6B7280"
                    }}>
                    Provided project management and quality assurance, delivering progress reports and managing project
                    scope, resources, and schedules.
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#6B7280"
                    }}>
                    Fostered teamwork and collaboration through participation in company events and regular
                    communication with clients.
                </div>
            </div>
            <div style={{
                backgroundColor: "#00260F",
                paddingTop: "1vw",
                paddingBottom: "1vw"
            }}>
                <div
                    className="className01Span"
                    style={{
                        color: "#D1D5DB"
                    }}>
                    August 2017 - February 2021
                </div>
                <div
                    className="className01Span">
                    Principal Automation Test Engineer, QA Architect, QA Lead, Test Lead
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#D1D5DB"
                    }}>
                    (Various)
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#6B7280"
                    }}>
                    Summary:
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#6B7280"
                    }}>
                    Led and architected quality assurance processes across multiple projects,including test automation
                    for data models, fintech platforms, and taxation systems.
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#6B7280"
                    }}>
                    Worked with stakeholders to align business requirements with test strategies, managed test plans,
                    and ensured traceability between user stories and test cases.
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#6B7280"
                    }}>
                    Developed CI/CD configurations for continuous testing and maintained version control through peer
                    review processes.
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#6B7280"
                    }}>
                    ---
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#6B7280"
                    }}>
                    Key Responsibilities:
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#6B7280"
                    }}>
                    Developed and managed test automation frameworks using Java, Selenium,Appium, and Cucumber.
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#6B7280"
                    }}>
                    Configured CI/CD pipelines to enable continuous testing during deployment phases across
                    environments.
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#6B7280"
                    }}>
                    Liaised with manual testing teams to integrate automated testing processes and enhance test
                    coverage.
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#6B7280"
                    }}>
                    Reviewed business rules, user stories, and test scripts to ensure alignment and traceability in
                    JIRA.
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#6B7280"
                    }}>
                    Communicated test results and defect statuses to stakeholders, ensuring alignment with business
                    specifications.
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#6B7280"
                    }}>
                    Created test plans, monitored execution, and generated reports for stakeholders, including CTOs and
                    Project Managers.
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#6B7280"
                    }}>
                    Led QA process improvements and documented best practices for new resources.
                </div>
            </div>
            <div style={{
                backgroundColor: "#00260F",
                paddingTop: "1vw",
                paddingBottom: "1vw"
            }}>
                <div
                    className="className01Span"
                    style={{
                        color: "#D1D5DB"
                    }}>
                    April 2013 - February 2017
                </div>
                <div
                    className="className01Span">
                    Software Testing Engineer
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#D1D5DB"
                    }}>
                    (Various)
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#6B7280"
                    }}>
                    Developed and evaluated test plans, scenarios, and use cases for desktop and web applications,
                    ensuring comprehensive Software Verification and ValidationPlans and Requirements Traceability
                    Matrices.
                </div>
                <div
                    className="className01Span"
                    style={{
                        color: "#6B7280"
                    }}>
                    Conducted testing (Black-box & White-box) of Python implementations, XML outputs, and HTML reports, covering dynamic webpages, contextual help,compliance, and ruler reports.
                </div>
            </div>
        </section>
    );
}