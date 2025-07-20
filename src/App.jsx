import React from 'react';
import './App.css';
import { FaGithub, FaDiscord } from 'react-icons/fa';

const App = () => {
    const modules = {
        Combat: ['AimAssist', 'AutoClicker', 'AutoPotion', 'Hitbox', 'KillAura', 'Velocity'],
        Minigames: ['MurdererFinder'],
        Miscellaneous: ['ActiveMods', 'DiscordRPC', 'Transparency'],
        Movement: ['AutoClutch', 'NoFall', 'SafeWalk'],
        Player: ['AntiHunger', 'FakeLag','FastBreak', 'FastPlace'],
        Render: ['EntityESP', 'Fullbright', 'NoHurtCam', 'Tracers', 'Trajectory','Xray'],
        World: ['GhostHand', 'MacroRecorder']
    };

    const github_contributors = [
        { name: '@enzzzh', url: 'https://github.com/enzzzh' },
        { name: '@ProgMEM-CC', url: 'https://github.com/ProgMEM-CC' }
    ];

    const reddit_contributors = [
        { name: 'u/Ok_Butterfly8951', url: 'https://www.reddit.com/user/Ok_Butterfly8951/' },
        { name: 'u/ilmaestrofficial', url: 'https://www.reddit.com/user/ilmaestrofficial/' },
        { name: 'u/Classic_Lion_9491', url: 'https://www.reddit.com/user/Classic_Lion_9491/' },
    ];

    return (
        <div className="app">
            <div className="glass">
                <h1>
                    <span className="text-4xl">Amber Client</span>
                    <span className="text-base align-super"> by gqdThinky</span>
                </h1>

                <p className="description">
                    A 1.21.4 Minecraft client focused on a clean design, performance, and essential utility modules.
                </p>

                <div className="download-buttons">
                    <a
                        href="https://github.com/gqdThinky/AmberClient/releases/tag/Beta"
                        className="download-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download InDev (0.6.1)
                    </a>
                    <a
                        href="https://github.com/gqdThinky/AmberClient/releases/tag/Beta_0.6.1"
                        className="download-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download LTS (0.6.1)
                    </a>
                </div>

                <details className="details-section">
                    <summary>🚀 How to Use</summary>
                    <ul>
                        <li>
                            Install{' '}
                            <a
                                href="https://fabricmc.net/use/installer/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Fabric 1.21.4
                            </a>
                        </li>
                        <li>
                            Download the latest version and place the <code>.jar</code> file in your{' '}
                            <code>%appdata%/.minecraft/mods</code> folder
                        </li>
                        <li>
                            Install{' '}
                            <a
                                href="https://modrinth.com/mod/fabric-api/versions"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Fabric API
                            </a>
                            {' '}and{' '}
                            <a
                                href="https://modrinth.com/mod/fabric-language-kotlin/version/1.10.8+kotlin.1.9.0"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Fabric Language Kotlin
                            </a>
                        </li>
                        <li>
                            Place them in the same <code>mods</code> folder
                        </li>
                        <li>
                            Launch Minecraft and press <strong>R-SHIFT</strong> to open the Click GUI
                        </li>
                    </ul>
                </details>

                <details className="details-section">
                    <summary>📦 Modules</summary>
                    <div className="modules-grid">
                        {Object.entries(modules).map(([category, moduleList], index) => (
                            <div key={index} className="category-group">
                                <strong>{category}</strong>
                                <div className="module-list">
                                    {moduleList.map((module, moduleIndex) => (
                                        <div key={moduleIndex} className="module-item" title={module}>
                                            {module}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </details>

                <details className="details-section">
                    <summary>🗺️ Roadmap</summary>
                    <p>
                        Track development progress on{' '}
                        <a
                            href="https://trello.com/b/DKUyIJQ7/amber-client"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Trello
                        </a>.
                    </p>
                </details>

                <details className="details-section">
                    <summary>🙌 Acknowledgments</summary>
                    <p>
                        Thanks to all the contributors who helped on this project:
                    </p>
                    <ul>
                        {github_contributors.map((contributor, index) => (
                            <li key={index}>
                                <a
                                    href={contributor.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {contributor.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <p>
                        <br />Thanks to the{' '}
                        <a
                            href="https://www.reddit.com/r/minecraftclients/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            r/minecraftclients
                        </a> community,
                        in particular:
                    </p>
                    <ul>
                        {reddit_contributors.map((contributor, index) => (
                            <li key={index}>
                                <a
                                    href={contributor.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {contributor.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </details>

                <div className="social-links">
                    <a href="https://discord.gg/jwgSKxWqrn" className="icon-link" target="_blank" rel="noopener noreferrer">
                        <FaDiscord size={32} />
                    </a>
                    <a href="https://github.com/gqdThinky/AmberClient" className="icon-link" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={32} />
                    </a>
                </div>

            </div>
            <footer className="footer">
                <p>Made with <span className="heart">❤</span> by @gqdThinky & @ProgMEM-CC</p>
                <p>Amber Client is an independent project. Not affiliated with Mojang or Microsoft.</p>
            </footer>
        </div>
    );
};

export default App;