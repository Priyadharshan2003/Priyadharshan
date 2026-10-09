import React from 'react';
import { Document, Page, Text, View, StyleSheet, Link, Font } from '@react-pdf/renderer';
import type { ResumeData } from '../../data/latex-resume';

// Try to use standard PDF fonts if possible, or register standard open-source fonts for the Jake Gutierrez ATS look
Font.register({
  family: 'Times',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/timesnewroman/v11/TimesNewRoman.ttf' },
  ]
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Times-Roman',
    fontSize: 11,
    color: '#000000',
    lineHeight: 1.3
  },
  header: {
    textAlign: 'center',
    marginBottom: 8
  },
  name: {
    fontSize: 24,
    fontFamily: 'Times-Bold',
    textTransform: 'uppercase',
    marginBottom: 2
  },
  contact: {
    fontSize: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 4
  },
  link: {
    color: '#000000',
    textDecoration: 'none',
  },
  sectionTitleContainer: {
    borderBottom: '1pt solid black',
    marginBottom: 4,
    marginTop: 8
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: 'Times-Bold',
    textTransform: 'uppercase',
  },
  itemContainer: {
    marginBottom: 6
  },
  itemHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 1
  },
  itemTitle: {
    fontFamily: 'Times-Bold',
    fontSize: 11
  },
  itemLocation: {
    fontSize: 11
  },
  itemSubtitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontStyle: 'italic',
    marginBottom: 2
  },
  itemSubtitle: {
    fontFamily: 'Times-Italic',
    fontSize: 10
  },
  itemPeriod: {
    fontFamily: 'Times-Italic',
    fontSize: 10
  },
  bulletList: {
    marginLeft: 12
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 2
  },
  bulletSymbol: {
    width: 10,
    fontSize: 12,
    marginTop: -2
  },
  bulletText: {
    flex: 1,
    fontSize: 10
  },
  boldText: {
    fontFamily: 'Times-Bold'
  }
});

interface Props {
  data: ResumeData;
}

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.bulletPoint}>
    <Text style={styles.bulletSymbol}>•</Text>
    <Text style={styles.bulletText}>{children}</Text>
  </View>
);

export const ReactPdfResume = ({ data }: Props) => {
  return (
    <Document title={`${data.personalInfo.name} Resume`} author={data.personalInfo.name}>
      <Page size="LETTER" style={styles.page}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.personalInfo.name}</Text>
          <View style={styles.contact}>
            {data.personalInfo.phone && <Text>{data.personalInfo.phone} | </Text>}
            {data.personalInfo.email && <Link style={styles.link} src={`mailto:${data.personalInfo.email}`}>{data.personalInfo.email} | </Link>}
            {data.personalInfo.linkedin && <Link style={styles.link} src={`https://${data.personalInfo.linkedin}`}>{data.personalInfo.linkedin} | </Link>}
            {data.personalInfo.github && <Link style={styles.link} src={`https://${data.personalInfo.github}`}>{data.personalInfo.github}</Link>}
          </View>
        </View>

        {/* SUMMARY */}
        {data.summary && (
          <View>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Professional Summary</Text>
            </View>
            <View style={styles.bulletList}>
              <Bullet>{data.summary}</Bullet>
            </View>
          </View>
        )}

        {/* EDUCATION */}
        {data.education && data.education.length > 0 && (
          <View>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Education</Text>
            </View>
            {data.education.map((edu, i) => (
              <View key={i} style={styles.itemContainer}>
                <View style={styles.itemHeaderRow}>
                  <Text style={styles.itemTitle}>{edu.institution}</Text>
                  <Text style={styles.itemLocation}>{edu.location}</Text>
                </View>
                <View style={styles.itemSubtitleRow}>
                  <Text style={styles.itemSubtitle}>{edu.degree}</Text>
                  <Text style={styles.itemPeriod}>{edu.period}</Text>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* EXPERIENCE */}
        {data.experience && data.experience.length > 0 && (
          <View>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Experience</Text>
            </View>
            {data.experience.map((exp, i) => (
              <View key={i} style={styles.itemContainer}>
                <View style={styles.itemHeaderRow}>
                  <Text style={styles.itemTitle}>{exp.role}</Text>
                  <Text style={styles.itemLocation}>{exp.period}</Text>
                </View>
                <View style={styles.itemSubtitleRow}>
                  <Text style={styles.itemSubtitle}>{exp.company}</Text>
                  <Text style={styles.itemPeriod}>{exp.location}</Text>
                </View>
                <View style={styles.bulletList}>
                  {exp.points.map((pt, j) => <Bullet key={j}>{pt}</Bullet>)}
                </View>
              </View>
            ))}
          </View>
        )}

        {/* OPEN SOURCE */}
        {data.openSource && data.openSource.length > 0 && (
          <View>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Open Source Contributions</Text>
            </View>
            {data.openSource.map((os, i) => (
              <View key={i} style={styles.itemContainer}>
                <View style={styles.itemHeaderRow}>
                  <Text style={styles.itemTitle}>{os.organization} ({os.repository}) | <Text style={styles.itemSubtitle}>{os.role}</Text></Text>
                </View>
                <View style={styles.bulletList}>
                  {os.technologies && (
                    <Bullet><Text style={styles.boldText}>Technologies:</Text> {os.technologies.join(', ')}</Bullet>
                  )}
                  {os.prs && os.prs.map((pr, j) => (
                    <View key={j}>
                      <Bullet>
                        <Link style={[styles.link, styles.boldText]} src={pr.url}>{pr.prNumber}</Link> - {pr.title} [{pr.status}]
                      </Bullet>
                      <View style={{ marginLeft: 12 }}>
                        {pr.contributions?.map((c, k) => <Bullet key={k}>{c}</Bullet>)}
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        )}

        {/* SKILLS */}
        {data.skills && (
          <View>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Technical Skills</Text>
            </View>
            <View style={styles.bulletList}>
              {data.skills.languages && (
                <View style={styles.bulletPoint}>
                  <Text style={styles.bulletText}><Text style={styles.boldText}>Languages: </Text>{data.skills.languages}</Text>
                </View>
              )}
              {data.skills.frameworks && (
                <View style={styles.bulletPoint}>
                  <Text style={styles.bulletText}><Text style={styles.boldText}>Frameworks: </Text>{data.skills.frameworks}</Text>
                </View>
              )}
              {data.skills.tools && (
                <View style={styles.bulletPoint}>
                  <Text style={styles.bulletText}><Text style={styles.boldText}>Developer Tools: </Text>{data.skills.tools}</Text>
                </View>
              )}
            </View>
          </View>
        )}

        {/* CERTIFICATIONS */}
        {data.certifications && data.certifications.length > 0 && (
          <View>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Certifications</Text>
            </View>
            <View style={styles.bulletList}>
              {data.certifications.map((cert, i) => (
                <View key={i} style={styles.bulletPoint}>
                  <Text style={styles.bulletText}><Text style={styles.boldText}>{cert.title}</Text> ({cert.year})</Text>
                </View>
              ))}
            </View>
          </View>
        )}

      </Page>
    </Document>
  );
};
