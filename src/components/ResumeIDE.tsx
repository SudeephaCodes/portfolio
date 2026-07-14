import React, { useEffect, useState, useRef } from 'react';
import { Download, FileText } from 'lucide-react';
import { filesData, personalInfo } from '../data/portfolioData';

export const ResumeIDE: React.FC = () => {
  const [activeFile, setActiveFile] = useState<string>('resume.json');
  
  // State for typed lines in the editor
  // We represent each line as: { tokens: { type: string; text: string }[] }
  const [typedLines, setTypedLines] = useState<{ tokens: { type: string; text: string }[] }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Trigger when activeFile changes or when the component enters view
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasEnteredView) {
          setHasEnteredView(true);
        }
      },
      { threshold: 0.15 }
    );
    const current = containerRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [hasEnteredView]);

  useEffect(() => {
    if (!hasEnteredView) return;
    
    // Reset and start typing
    setTypedLines([]);
    setIsTyping(true);

    if (typingTimerRef.current) {
      clearTimeout(typingTimerRef.current);
    }

    const linesToType = filesData[activeFile];
    if (!linesToType) return;

    let lineIdx = 0;
    let tokenIdx = 0;
    let charIdx = 0;

    // Helper state to accumulate what is typed so far
    let currentTyped: typeof typedLines = [];

    const typeNextChar = () => {
      if (lineIdx >= linesToType.length) {
        setIsTyping(false);
        return;
      }

      const currentLine = linesToType[lineIdx];
      const tokens = currentLine.tokens;

      // Initialize the line if it doesn't exist
      if (!currentTyped[lineIdx]) {
        currentTyped = [...currentTyped, { tokens: [] }];
        setTypedLines(currentTyped);
      }

      if (tokens.length === 0) {
        // Empty line, go to next line
        lineIdx++;
        tokenIdx = 0;
        charIdx = 0;
        typingTimerRef.current = setTimeout(typeNextChar, 60);
      } else {
        const token = tokens[tokenIdx];
        if (!currentTyped[lineIdx].tokens[tokenIdx]) {
          // Initialize token
          const updatedLine = {
            ...currentTyped[lineIdx],
            tokens: [...currentTyped[lineIdx].tokens, { type: token.type, text: '' }]
          };
          currentTyped = [
            ...currentTyped.slice(0, lineIdx),
            updatedLine,
            ...currentTyped.slice(lineIdx + 1)
          ];
          setTypedLines(currentTyped);
        }

        // Add character
        const currentText = currentTyped[lineIdx].tokens[tokenIdx].text;
        const targetText = token.text;

        if (charIdx < targetText.length) {
          const updatedToken = {
            ...currentTyped[lineIdx].tokens[tokenIdx],
            text: currentText + targetText[charIdx]
          };
          const updatedTokens = [
            ...currentTyped[lineIdx].tokens.slice(0, tokenIdx),
            updatedToken,
            ...currentTyped[lineIdx].tokens.slice(tokenIdx + 1)
          ];
          const updatedLine = { ...currentTyped[lineIdx], tokens: updatedTokens };
          currentTyped = [
            ...currentTyped.slice(0, lineIdx),
            updatedLine,
            ...currentTyped.slice(lineIdx + 1)
          ];
          setTypedLines(currentTyped);

          charIdx++;
          typingTimerRef.current = setTimeout(typeNextChar, 15);
        } else {
          // Finished typing current token
          tokenIdx++;
          charIdx = 0;
          if (tokenIdx >= tokens.length) {
            // Finished typing current line, go to next line
            lineIdx++;
            tokenIdx = 0;
            charIdx = 0;
            typingTimerRef.current = setTimeout(typeNextChar, 80);
          } else {
            // Type next token on same line
            typingTimerRef.current = setTimeout(typeNextChar, 15);
          }
        }
      }
    };

    typeNextChar();

    return () => {
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current);
      }
    };
  }, [activeFile, hasEnteredView]);

  const fileKeys = Object.keys(filesData);

  return (
    <section className="section" id="resume" ref={containerRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">// My Resume</span>
          <h2 className="section-title">Resume</h2>
          <div className="section-line"></div>
        </div>

        <div className="resume-actions">
          <a href={personalInfo.resumePdf} download="Sudeepha_R_Resume.pdf" className="btn btn-primary">
            <Download size={18} />
            Download CV (PDF)
          </a>
        </div>

        <div className="ide-container" id="ideContainer">
          <div className="ide-toolbar">
            <div className="ide-dots">
              <span className="ide-dot red"></span>
              <span className="ide-dot yellow"></span>
              <span className="ide-dot green"></span>
            </div>
            <span className="ide-filename" id="ideCurrentFile">{activeFile}</span>
            <div className="ide-actions"></div>
          </div>
          
          <div className="ide-workspace">
            {/* Sidebar Explorer */}
            <div className="ide-sidebar">
              <div className="ide-sidebar-title">Explorer</div>
              <div className="ide-file-list">
                {fileKeys.map((fileName) => (
                  <div
                    key={fileName}
                    className={`ide-file-item ${activeFile === fileName ? 'active' : ''}`}
                    onClick={() => setActiveFile(fileName)}
                  >
                    <FileText size={16} style={{ marginRight: '6px' }} />
                    {fileName}
                  </div>
                ))}
              </div>
            </div>

            {/* Main Editor */}
            <div className="ide-editor">
              <div className="ide-tab-bar" id="ideTabBar">
                {fileKeys.map((fileName) => (
                  <div
                    key={fileName}
                    className={`ide-tab ${activeFile === fileName ? 'active' : ''}`}
                    onClick={() => setActiveFile(fileName)}
                  >
                    <FileText size={12} style={{ marginRight: '4px' }} />
                    {fileName}
                  </div>
                ))}
              </div>
              <div className="ide-body" id="ideBody">
                <div className="ide-line-numbers" id="ideLineNumbers">
                  {typedLines.map((_, index) => (
                    <div key={index}>{index + 1}</div>
                  ))}
                </div>
                <div className="ide-code" id="ideCode">
                  {typedLines.map((line, lineIdx) => (
                    <div key={lineIdx} className="ide-line">
                      {line.tokens.length === 0 ? (
                        <span>&nbsp;</span>
                      ) : (
                        line.tokens.map((token, tokIdx) => (
                          <span key={tokIdx} className={token.type}>
                            {token.text}
                          </span>
                        ))
                      )}
                      {lineIdx === typedLines.length - 1 && isTyping && (
                        <span className="ide-cursor"></span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
