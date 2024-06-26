package _6nehemie.com.server.service;

import _6nehemie.com.server.model.*;
import org.springframework.ai.chat.ChatClient;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.prompt.PromptTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


@Service
public class AiService {

    private final ChatClient chatClient;
    private final Resource generate;


    public AiService(
            ChatClient chatClient,
            ResourceLoader resourceLoader,
            @Value("${prompts.generateBis}") String generate

    ) {
        this.chatClient = chatClient;
        this.generate = resourceLoader.getResource(generate);
    }

    /**
     * Generate a cover letter
     *
     * @param jobInfo    - the job information object
     * @param user       - the user
     * @param profile    - the profile
     * @param educations - the list of educations
     * @return - the generated cover letter
     */
    public String generateCoverLetter(Generate jobInfo, User user, Profile profile, List<Education> educations) {
        //? Just for testing purposes
        PromptTemplate promptGenerateTemplate = new PromptTemplate(generate);

        //? Fetch the user experiences from the selected profile
        String experiences = profile.getExperiences().toString();

        //? Create a prompt with the user's information and the job information
        Prompt prompt = promptGenerateTemplate
                .create(Map.of(
                        "fullName", user.getFirstName() + " " + user.getLastName(),
                        "education", educations.toString(),
                        "experiences", experiences,
                        "jobTitle", jobInfo.getJobTitle(),
                        "companyName", jobInfo.getCompany(),
                        "experienceLevel", jobInfo.getExperienceLevel(),
                        "skills", profile.getSkills(),
                        "description", jobInfo.getDescription()
                ));

        //? Return the generated cover letter
        return chatClient.call(prompt).getResult().getOutput().getContent();
    }

    //? Just for testing purposes
//    public String generateCoverLetterBis() {
//        PromptTemplate promptGenerateTemplate = new PromptTemplate(generate);
//
//        User user = new User();
//        user.setFirstName("Naomi");
//        user.setLastName("Liu");
//        user.setEmail("naomi.liu@one.com");
//
//        Education education1 = new Education();
//        education1.setDegree("Bachelor of Science in Computer Science");
//        education1.setInstitution("University of California, Berkeley");
//        education1.setGraduationYear(2020);
//
//        Education education2 = new Education();
//        education2.setDegree("Master of Science in Computer Science");
//        education2.setInstitution("Stanford University");
//        education2.setGraduationYear(2022);
//
//        List<Education> educations = List.of(education1, education2);
//
//        Profile profile = new Profile();
//        profile.setUser(user);
//        profile.setSkills("Java, Python, Spring Boot, React");
//
//        Experience experience1 = new Experience();
//        experience1.setCompany("Google");
//        experience1.setJobTitle("Software Engineer");
//        experience1.setLocation("Mountain View, CA");
//        experience1.setStartDate("2019-06-01");
//        experience1.setEndDate("2021-06-01");
//        experience1.setResponsibilities("Developed new features for Google Search");
//        experience1.setAchievements("Increased search speed by 20%");
//
//        Experience experience2 = new Experience();
//        experience2.setCompany("Facebook");
//        experience2.setJobTitle("Software Engineer");
//        experience2.setLocation("Menlo Park, CA");
//        experience2.setStartDate("2021-06-01");
//        experience2.setEndDate("2023-06-01");
//        experience2.setResponsibilities("Developed new features for Facebook Messenger");
//        experience2.setAchievements("Increased message delivery speed by 30%");
//
//        List<Experience> experiences = List.of(experience1, experience2);
//
//        Generate jobInfo = new Generate();
//        jobInfo.setJobTitle("Software Engineer");
//        jobInfo.setCompany("Apple");
//        jobInfo.setLocation("Cupertino, CA");
//        jobInfo.setJobType("Full-time");
//        jobInfo.setExperienceLevel("Mid-level");
//        jobInfo.setDescription("About the job\nWho we are:\n\nBigID is an innovative tech startup that focuses on solutions for data security, compliance, privacy, and governance. We're leading the market in all things data: helping our customers reduce risk, drive business innovation, achieve compliance, build customer trust, make better decisions, and get more value from their data.\n\nWe are building a global team with a passion for innovation and next-gen technology. BigID has been recognized for being one of CNBC’s Top 25 Startups powering the economy, we're on Built In's 2023 Best Places to Work, one of America's fastest-growing companies, Inc5000 2023, 3 years running, one of the 20 coolest identity access management and data protection companies, CRN Security 100 2023, a Market Leader in DSPM at the 11th annual Global InfoSec Awards (Cyber Defense Magazine) and 2023 Disruptor Gold Winner - Most Disruptive Cyber Security Software, Globee Awards.\n\nAt BigID, our team is the foundation of our success. Join a people-centric culture that is fast-paced and rewarding: you’ll have the opportunity to work with some of the most talented people in the industry who value innovation, diversity, integrity, and collaboration.\n\nWho we seek:\n\nWe’re looking for a software engineer with a “can do anything” spirit. Working on cross product features and enhancing product resources. As a software engineer you will play a key role in developing core solutions, building new services, implementing new technologies from scratch and bringing innovation to the team’s developments. Our ideal candidate is a customer facing team player who has hands-on Backend experience and is capable of claiming ownership of a feature, from one end to another.\n\nWhat you’ll do:\n\nDesign logical solutions to complex challenges for our customers and internal developers\nWrite high-quality code, covered by solid unit and integration tests\nDrive technological and architectural decisions\nReview the design and code for other team members\nWork directly with customers on features\n\nWhat you’ll bring:\n\nAt least 3 years of hands-on experience in Backend development: Node.js, Java with a Proven track record of designing and implementing software solutions.\nExcellent communication and collaboration skills.\nDeep understanding of REST APIs, Databases, message queues, multi-tenancy, big data and scalable computing.\nExperience with microservices (preferably in kubernetes environments)\nExperience in Agile development\nA can-do-attitude\n\nAdvantages:\n\nJava and Spring knowledge\nFull stack capabilities\nFamiliarity with SDK and shared clients practices\n\nWhat’s in it for you?!\n\nOur people are the foundation of our success, and we place a high priority on offering a wide range of benefits that make our team happier and healthier.\n\n Equity participation - everyone shares in our success\n Flexible work arrangements\n Other compulsory benefits based on country of residence\n\nOur Values:\n\nWe look for people who embody our values - Care, Do, Try & Shine.\n\nCare - We care about our customers and each other\nDo - We do what it takes to make a positive impact\nTry - We try our best and we don’t give up\nShine - We shine and make it our mission to always stand out\n\nBigDiversity: We’re committed to creating a culture of inclusion, diversity, and equality – across race, gender, sexuality, disability, and neurodiversity – where innovation and growth thrive, every voice is heard, and everybody belongs. Learn more about us here.\n\nCPRA Employee Privacy Notice: CA \n\nBigID is an E-Verify Participant.");
//
//        Prompt prompt = promptGenerateTemplate
//                .create(Map.of(
//                        "fullName", user.getFirstName() + " " + user.getLastName(),
//                        "education", educations.toString(),
//                        "experiences", experiences.toString(),
//                        "jobTitle", jobInfo.getJobTitle(),
//                        "companyName", jobInfo.getCompany(),
//                        "experienceLevel", jobInfo.getExperienceLevel(),
//                        "skills", profile.getSkills(),
//                        "description", jobInfo.getDescription()
//                ));
//
//        return chatClient.call(prompt).getResult().getOutput().getContent();
//    }
}
