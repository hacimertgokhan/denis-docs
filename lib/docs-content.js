export const highlights = [
  {
    title: "Redis-like workflow",
    description: "Denis presents itself as a simple cache-first engine focused on temporary data manipulation and quick CRUD-style access patterns.",
  },
  {
    title: "Multiple access surfaces",
    description: "The repository exposes a packaged jar, CLI commands, service helpers, and a TCP server mode instead of only a single embedded API.",
  },
  {
    title: "Hybrid query model",
    description: "Beyond action classes such as actString and actStrist, the project also documents a SQL-like command subset for remote interaction.",
  },
  {
    title: "Release-friendly install flow",
    description: "The repo includes install scripts, start scripts, and bundled runtime files so users can run Denis outside a Java IDE.",
  },
  {
    title: "Runtime-oriented packaging",
    description: "Configuration and runtime files such as denis.toml, ddb.json, pawd.dat, and logs are expected to live next to the installed app.",
  },
  {
    title: "Documentation gap",
    description: "The upstream README covers key topics, but they are unevenly structured. This site normalizes them into a clearer learning path.",
  },
];

export const quickStartCommands = `mvn package

java -jar target/denis-0.0.2.9-alpha.jar --help
java -jar target/denis-0.0.2.9-alpha.jar server
java -jar target/denis-0.0.2.9-alpha.jar cli`;

export const releaseInstallCommands = `sh install.sh
denis --help
denis server
denis cli`;

export const windowsInstallCommands = `install.bat
denis.bat --help
denis.bat server
denis.bat cli`;

export const cliExamples = `denis --version
denis server
denis cli
denis cli --help
denis cli token -l
denis cli token -c`;

export const sqlExamples = `CREATE TABLE users (id INT, name TEXT);
INSERT INTO users (id, name) VALUES (1, 'Ada');
SELECT * FROM users WHERE id = 1;
UPDATE users SET name = 'Grace' WHERE id = 1;
DELETE FROM users WHERE id = 1;
DROP TABLE users;`;

export const actStringExample = `actString actstr = new actString();

actstr.set("key1", "value1");
String value = actstr.get("key1");
boolean exists = actstr.exists("key1");
actstr.del("key1");`;

export const actListrigExample = `import java.util.Arrays;
import java.util.List;

actListrig actlist = new actListrig();
List<String> key = Arrays.asList("item1", "item2");

actlist.set(key, "value1");
String value = actlist.get(key);
boolean exists = actlist.getStore().containsKey(key);
actlist.del(key);`;

export const actStristExample = `actStrist actstrist = new actStrist();

String key = "group1";
List<String> values = Arrays.asList("item1", "item2", "item3");

actstrist.set(key, values);
List<String> retrievedValues = actstrist.get(key);
boolean exists = actstrist.exists(key);
actstrist.del(key);`;

export const architectureRows = [
  { key: "Primary language", value: "Java is the dominant implementation language in the upstream repository." },
  { key: "Execution modes", value: "Local jar execution, CLI mode, and server mode are all first-class entry points." },
  { key: "Install assets", value: "Shell and batch scripts help install wrappers and start the app without manually typing the jar command every time." },
  { key: "Runtime files", value: "The README explicitly calls out denis.properties, denis.toml, ddb.json, pawd.dat, and logs/." },
  { key: "Data APIs", value: "The project exposes typed action classes and also a SQL-style command protocol for remote interaction." },
];

export const versionRows = [
  { key: "Latest documented release", value: "0.0.2.9 alpha is the latest release explicitly visible in the repository page snapshot." },
  { key: "Build command", value: "Use mvn package to produce the project jar locally." },
  { key: "Distribution shape", value: "GitHub releases publish bundled archives such as zip or tar.gz project bundles." },
  { key: "Upgrade advice", value: "Treat release bundles as the primary install surface and keep runtime files backed up before replacing an installation." },
];

export const maintainers = [
  {
    name: "Haci Mert Gokhan",
    role: "Repository owner and core Denis Database developer",
    href: "https://github.com/hacimertgokhan",
  },
  {
    name: "Yusuf Ozbas",
    role: "Contributor noted in the original docs for PHP and Node-related driver work",
    href: "https://github.com/trxyazilimedu",
  },
];
