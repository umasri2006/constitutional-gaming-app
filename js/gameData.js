// Game Data - Constitution of India Articles

const constitutionData = {
  // Fundamental Rights (Articles 12-35)
  fundamentalRights: [
    {
      number: "12",
      title: "Definition of the State",
      description: "Defines what constitutes the 'State' under Part III of the Constitution, which includes the Government and Parliament of India, Government and Legislature of states, and all local or other authorities within India or under control of the Government of India."
    },
    {
      number: "13",
      title: "Laws inconsistent with Fundamental Rights",
      description: "Declares that laws inconsistent with or in derogation of the fundamental rights shall be void to the extent of the inconsistency."
    },
    {
      number: "14",
      title: "Equality before law",
      description: "Guarantees equality before the law and equal protection of the laws to all persons within the territory of India."
    },
    {
      number: "15",
      title: "Prohibition of discrimination",
      description: "Prohibits discrimination by the State against any citizen on grounds only of religion, race, caste, sex, place of birth, or any of them."
    },
    {
      number: "16",
      title: "Equality of opportunity in public employment",
      description: "Guarantees equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State."
    },
    {
      number: "17",
      title: "Abolition of Untouchability",
      description: "Abolishes untouchability and forbids its practice in any form."
    },
    {
      number: "18",
      title: "Abolition of titles",
      description: "Abolishes titles except military and academic distinctions and prohibits Indian citizens from accepting titles from foreign states without the consent of the President."
    },
    {
      number: "19",
      title: "Protection of certain rights regarding freedom of speech, etc.",
      description: "Guarantees six fundamental freedoms: freedom of speech and expression, assembly, association, movement, residence, and profession or occupation."
    },
    {
      number: "20",
      title: "Protection in respect of conviction for offenses",
      description: "Provides protection against ex-post facto laws, double jeopardy, and self-incrimination."
    },
    {
      number: "21",
      title: "Protection of life and personal liberty",
      description: "Guarantees that no person shall be deprived of his life or personal liberty except according to procedure established by law."
    },
    {
      number: "21A",
      title: "Right to Education",
      description: "Guarantees free and compulsory education to all children between the ages of six and fourteen years."
    },
    {
      number: "22",
      title: "Protection against arrest and detention",
      description: "Provides safeguards against arbitrary arrest and detention, including the right to be informed of grounds of arrest and right to legal consultation."
    },
    {
      number: "23",
      title: "Prohibition of traffic in human beings and forced labor",
      description: "Prohibits human trafficking, forced labor, and child employment in factories, mines, or other hazardous activities."
    },
    {
      number: "24",
      title: "Prohibition of employment of children in factories, etc.",
      description: "Prohibits employment of children below 14 years of age in factories, mines, or any other hazardous employment."
    },
    {
      number: "25",
      title: "Freedom of conscience and free profession, practice and propagation of religion",
      description: "Guarantees freedom of conscience and the right to freely profess, practice, and propagate religion."
    },
    {
      number: "26",
      title: "Freedom to manage religious affairs",
      description: "Guarantees freedom to religious denominations to establish and maintain institutions for religious and charitable purposes."
    },
    {
      number: "27",
      title: "Freedom as to payment of taxes for promotion of any particular religion",
      description: "Ensures that no person shall be compelled to pay taxes for the promotion or maintenance of any particular religion."
    },
    {
      number: "28",
      title: "Freedom as to attendance at religious instruction or religious worship in certain educational institutions",
      description: "Provides freedom regarding attendance at religious instruction or worship in certain educational institutions."
    },
    {
      number: "29",
      title: "Protection of interests of minorities",
      description: "Guarantees that minorities have the right to conserve their distinct language, script, or culture."
    },
    {
      number: "30",
      title: "Right of minorities to establish and administer educational institutions",
      description: "Gives minorities the right to establish and administer educational institutions of their choice."
    },
    {
      number: "31",
      title: "Compulsory acquisition of property",
      description: "Relating to compulsory acquisition of property (Repealed by the 44th Amendment)."
    },
    {
      number: "32",
      title: "Remedies for enforcement of rights",
      description: "Guarantees the right to move the Supreme Court for the enforcement of fundamental rights, including the power to issue writs."
    },
    {
      number: "33",
      title: "Power of Parliament to modify the rights in their application to Armed Forces",
      description: "Empowers Parliament to restrict or abrogate the application of fundamental rights to the Armed Forces."
    },
    {
      number: "34",
      title: "Restriction on rights while martial law is in force",
      description: "Provides for restriction on fundamental rights during martial law in any area."
    },
    {
      number: "35",
      title: "Legislation to give effect to the provisions of this Part",
      description: "Grants Parliament exclusive power to make laws to implement the provisions of fundamental rights."
    }
  ],
  
  // Fundamental Duties (Article 51A)
  fundamentalDuties: [
    {
      number: "51A",
      title: "Fundamental Duties",
      description: "Outlines ten fundamental duties for every citizen of India, including respecting the Constitution, promoting harmony, protecting the environment, developing scientific temper, safeguarding public property, and striving for excellence."
    }
  ],
  
  // Elections (Articles 324-329A)
  elections: [
    {
      number: "324",
      title: "Superintendence, direction and control of elections to be vested in an Election Commission",
      description: "Establishes the Election Commission and vests it with the superintendence, direction, and control of elections."
    },
    {
      number: "325",
      title: "No person to be ineligible for inclusion in electoral roll on grounds of religion, race, caste or sex",
      description: "Ensures that no person shall be ineligible for inclusion in electoral rolls on grounds of religion, race, caste, or sex."
    },
    {
      number: "326",
      title: "Elections to the House of the People and to the Legislative Assemblies to be on the basis of adult suffrage",
      description: "Establishes that elections to Lok Sabha and State Legislative Assemblies shall be on the basis of adult suffrage."
    },
    {
      number: "327",
      title: "Power of Parliament to make provision with respect to elections to Legislatures",
      description: "Grants Parliament the power to make laws regarding elections to Legislatures."
    },
    {
      number: "328",
      title: "Power of Legislature of a State to make provision with respect to elections to such Legislature",
      description: "Grants State Legislatures the power to make laws regarding elections to those Legislatures."
    },
    {
      number: "329",
      title: "Bar to interference by courts in electoral matters",
      description: "Bars interference by courts in electoral matters regarding the validity of any law relating to delimitation of constituencies or allotment of seats."
    },
    {
      number: "329A",
      title: "Special provision as to elections to Parliament in the case of Prime Minister and Speaker",
      description: "Special provisions regarding elections to Parliament in the case of Prime Minister and Speaker (Repealed by the 44th Amendment)."
    }
  ],
  
  // Citizenship (Articles 5-11)
  citizenship: [
    {
      number: "5",
      title: "Citizenship at the commencement of the Constitution",
      description: "Defines who shall be citizens of India at the commencement of the Constitution."
    },
    {
      number: "6",
      title: "Rights of citizenship of certain persons who have migrated to India from Pakistan",
      description: "Provides for citizenship rights for persons who migrated to India from Pakistan before certain dates."
    },
    {
      number: "7",
      title: "Rights of citizenship of certain migrants to Pakistan",
      description: "Addresses the citizenship status of certain persons who had migrated to Pakistan but later returned to India."
    },
    {
      number: "8",
      title: "Rights of citizenship of certain persons of Indian origin residing outside India",
      description: "Allows persons of Indian origin residing outside India to register as Indian citizens under certain conditions."
    },
    {
      number: "9",
      title: "Persons voluntarily acquiring citizenship of a foreign State not to be citizens",
      description: "States that any person who voluntarily acquires the citizenship of a foreign state shall cease to be an Indian citizen."
    },
    {
      number: "10",
      title: "Continuance of the rights of citizenship",
      description: "Provides for the continuance of the rights of citizenship and specifies that every person who is or is deemed to be a citizen shall continue to be a citizen, subject to provisions of any law made by Parliament."
    },
    {
      number: "11",
      title: "Parliament to regulate the right of citizenship by law",
      description: "Empowers Parliament to regulate the right of citizenship by law, including acquisition and termination of citizenship."
    }
  ]
};

// Combine all articles into a single array for easier access
const allArticles = [
  ...constitutionData.fundamentalRights.map(article => ({...article, category: 'fundamental-rights', categoryName: 'Fundamental Rights'})),
  ...constitutionData.fundamentalDuties.map(article => ({...article, category: 'fundamental-duties', categoryName: 'Fundamental Duties'})),
  ...constitutionData.elections.map(article => ({...article, category: 'elections', categoryName: 'Elections'})),
  ...constitutionData.citizenship.map(article => ({...article, category: 'citizenship', categoryName: 'Citizenship'}))
];