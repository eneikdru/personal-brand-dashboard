const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execSync } = require('child_process');

/**
 * Moodle MBZ Exporter
 * Generates a minimal Moodle 4.x compatible backup file (.mbz)
 * based on the document registry.
 */

const projectRoot = path.resolve(__dirname, '..');
const modelPath = path.join(projectRoot, 'model/documents.json');
const exportDir = path.join(projectRoot, 'export_moodle');
const mbzFileName = 'knowledge_base_crie_backup.mbz';

function generateMoodleBackupXML(documents) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<moodle_backup>
  <information>
    <name>${mbzFileName}</name>
    <moodle_version>2022041900</moodle_version>
    <moodle_release>4.0 (Build: 20220419)</moodle_release>
    <backup_version>2022041900</backup_version>
    <backup_release>4.0</backup_release>
    <type>course</type>
    <format>moodle2</format>
    <interactive>1</interactive>
    <mode>10</mode>
    <execution>1</execution>
    <executiontime>1688000000</executiontime>
    <details>
      <detail backup_id="c6b12a83e028682e8677c77c76892697">
        <type>course</type>
        <format>moodle2</format>
        <interactive>1</interactive>
        <mode>10</mode>
        <execution>1</execution>
        <executiontime>1688000000</executiontime>
      </detail>
    </details>
    <contents>
      <course>
        <courseid>1</courseid>
        <title>База Знаний ЦНИИ Эпидемиологии</title>
        <directory>course</directory>
      </course>
      <activities>
        ${documents.map((doc, i) => `
        <activity>
          <moduleid>${i + 100}</moduleid>
          <sectionid>${i % 5}</sectionid>
          <modulename>resource</modulename>
          <title>${doc.title}</title>
          <directory>activities/resource_${i + 100}</directory>
        </activity>`).join('')}
      </activities>
      <sections>
        <section>
          <sectionid>1</sectionid>
          <title>Нормативная база</title>
          <directory>sections/section_1</directory>
        </section>
      </sections>
    </contents>
    <settings>
      <setting>
        <level>root</level>
        <name>filename</name>
        <value>${mbzFileName}</value>
      </setting>
    </settings>
  </information>
</moodle_backup>`;
}

function run() {
    console.log('📦 Starting Moodle MBZ Export...');

    if (!fs.existsSync(modelPath)) {
        console.error('❌ Model file not found at:', modelPath);
        process.exit(1);
    }

    const documents = JSON.parse(fs.readFileSync(modelPath, 'utf8'));

    // Create export temp directory
    if (fs.existsSync(exportDir)) {
        fs.rmSync(exportDir, { recursive: true, force: true });
    }
    fs.mkdirSync(exportDir, { recursive: true });

    // 1. Generate moodle_backup.xml
    fs.writeFileSync(path.join(exportDir, 'moodle_backup.xml'), generateMoodleBackupXML(documents));

    // 2. Generate minimal files.xml
    const filesXml = `<?xml version="1.0" encoding="UTF-8"?>
<files>
  <!-- Resource files would be defined here -->
</files>`;
    fs.writeFileSync(path.join(exportDir, 'files.xml'), filesXml);

    // 3. Create placeholder directories for Moodle structure
    fs.mkdirSync(path.join(exportDir, 'course'), { recursive: true });
    fs.mkdirSync(path.join(exportDir, 'activities'), { recursive: true });
    fs.mkdirSync(path.join(exportDir, 'sections'), { recursive: true });

    // 4. Compress to .mbz (which is a ZIP file)
    const targetPath = path.join(projectRoot, mbzFileName);
    try {
        process.chdir(exportDir);
        execSync(`zip -r ${targetPath} .`);
        console.log(`✅ MBZ archive created successfully: ${mbzFileName}`);
    } catch (err) {
        console.error('❌ Failed to create ZIP archive:', err.message);
    } finally {
        process.chdir(projectRoot);
        // Clean up temp dir
        // fs.rmSync(exportDir, { recursive: true, force: true });
    }
}

run();
