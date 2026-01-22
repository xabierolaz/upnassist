import React, { useState } from 'react';
import { useLanguageStore } from '../stores/languageStore';

export const FStringVisualizer: React.FC = () => {
    const { currentLang } = useLanguageStore();
    const [name, setName] = useState("Alice");
    const [price, setPrice] = useState(49.99);

    const priceFormatted = price.toFixed(2);
    
    // Dynamic F-String construction
    const pythonCode = `product = "${name}"
price = ${price}

print(f"The {product} costs \${price:.2f}")`;

    const output = `The ${name} costs $${priceFormatted}`;

    return (
        <div className="my-10 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
             <div className="bg-gray-50 p-4 border-b border-gray-200">
                <h3 className="font-bold text-gray-700 text-lg flex items-center gap-2">
                    <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-mono">f</span>
                    {currentLang === 'EUS' ? 'F-Strings Laborategia' : 
                     currentLang === 'CAS' ? 'Laboratorio F-Strings' : 
                     'F-Strings Laboratory'}
                </h3>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Controls */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            product (str)
                        </label>
                        <input 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            price (float)
                        </label>
                        <input 
                            type="number" 
                            value={price}
                            step="0.1"
                            onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                    </div>
                </div>

                {/* Visualization */}
                <div className="space-y-4">
                    {/* Code View */}
                    <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm shadow-inner relative group">
                        <div className="absolute top-2 right-2 text-xs text-gray-500">Python Code</div>
                        <div className="text-blue-300">product <span className="text-white">=</span> <span className="text-green-300">"{name}"</span></div>
                        <div className="text-blue-300">price <span className="text-white">=</span> <span className="text-purple-300">{price}</span></div>
                        <br/>
                        <div className="text-yellow-300">print<span className="text-white">(</span><span className="text-green-400">f"The <span className="text-white bg-white/10 px-0.5 rounded border border-white/20">{"{product}"}</span> costs $<span className="text-white bg-white/10 px-0.5 rounded border border-white/20">{"{price:.2f}"}</span>"</span><span className="text-white">)</span></div>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center text-gray-400">
                        ↓ Output
                    </div>

                    {/* Output View */}
                    <div className="bg-black text-white p-4 rounded-lg font-mono border-l-4 border-green-500 shadow-md">
                        The <span className="text-green-400 font-bold">{name}</span> costs $<span className="text-green-400 font-bold">{priceFormatted}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
