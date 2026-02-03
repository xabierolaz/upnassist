import React, { useState } from 'react';
import { useLanguageStore } from '../../store/languageStore';
import VisualizerCard from './VisualizerCard';

export const FStringVisualizer: React.FC = () => {
    const { t } = useLanguageStore();
    const [name, setName] = useState("Alice");
    const [price, setPrice] = useState(49.99);

    const priceFormatted = price.toFixed(2);

    return (
        <VisualizerCard
            title={t.visualizers.fstring.title}
            icon="f"
            iconColor="bg-green-600"
        >
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
        </VisualizerCard>
    );
};
