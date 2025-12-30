
// src/components/ChatTutor.tsx
import React from 'react';
const ChatTutor = () => <div>ChatTutor</div>;
export default ChatTutor;

// src/components/VoiceLive.tsx
import React from 'react';
const VoiceLive = () => <div>VoiceLive</div>;
export default VoiceLive;

// src/components/ProgressStats.tsx
import React from 'react';
const ProgressStats = () => <div>ProgressStats</div>;
export default ProgressStats;

// src/components/Dictionary.tsx
import React from 'react';
const Dictionary = () => <div>Dictionary</div>;
export default Dictionary;

// src/components/LandingPage.tsx
import React from 'react';
const LandingPage = ({ onStartTrial }: any) => <div className="p-4"><button onClick={onStartTrial}>Inizia</button></div>;
export default LandingPage;

// src/components/Auth.tsx
import React from 'react';
const Auth = ({ onLogin }: any) => <div><button onClick={() => onLogin({ email: 'test@test.com', name: 'Test' })}>Login</button></div>;
export default Auth;

// src/components/PrivacyPolicy.tsx
import React from 'react';
const PrivacyPolicy = ({ onBack }: any) => <div><button onClick={onBack}>Back</button>PrivacyPolicy</div>;
export default PrivacyPolicy;

// src/components/TermsOfUse.tsx
import React from 'react';
const TermsOfUse = ({ onBack }: any) => <div><button onClick={onBack}>Back</button>TermsOfUse</div>;
export default TermsOfUse;

// src/components/RefundPolicy.tsx
import React from 'react';
const RefundPolicy = ({ onBack }: any) => <div><button onClick={onBack}>Back</button>RefundPolicy</div>;
export default RefundPolicy;
