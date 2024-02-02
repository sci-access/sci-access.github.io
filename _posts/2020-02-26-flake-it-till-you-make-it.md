---
layout: page
title: Introduction
thumbnail-img: /assets/img/Uni-SMART-framework.png
---

## Introduction

**Background.**
Scientific literature, encompassing patents and academic papers, is a treasure trove of valuable data, including but not limited to drug properties and activities, reaction pathways, manufacturing processes, and omics relationships. 
The extraction of this data, however, is notoriously labor-intensive and time-consuming. 
It requires meticulous manual reading, analysis, and extraction, processes that are not only slow but also prone to human error.
Existing non-heuristic databases such as Sci-Finder and Reaxys rely heavily on human experts to perform these extractions. 
While they are effective in supporting certain types of data retrieval, such as chemical reactions, they lack the capacity for automatic extraction from newly published documents. 
This limitation poses a significant bottleneck in the timely utilization of scientific data, impeding research progress and the rapid application of new discoveries.
Thus, researchers and practitioners are in need of an intelligent navigator that can swiftly guide through the complexities of latest scientific data, identify relevant information with precision, and present it in a digestible format.

**Advent of LLMs.**
The advent of large language models (LLMs) such as ChatGPT has heralded a new era of natural language processing, demonstrating remarkable proficiency in a myriad of natural language tasks. 
There has been a proliferation of literature assistance tools based on such models, like ChatPDF, which facilitate the extraction of text from PDF documents and engage in natural language question-answering. 
However, these tools are tailored predominantly for text extraction, and while they excel in processing and generating human-like text, they falter when confronted with the multimodal nature of scientific literature.
Scientific documents are replete with multimodal information that extends beyond text, including but not limited to statistical tables, molecule graphs, and chemical reactions. 
The extraction and interpretation of such multimodal data require an understanding that transcends textual information and delves into the realm of visual and structural data representation. 

**Briefs of Uni-SMART.**
To address these challenges, we have developed Uni-SMART (Universal Science Multimodal Analysis and Research Transformer), which extends the capabilities of LLMs beyond text, allowing for the interpretation of the rich visual and structural information that is paramount in scientific documentation. 
[Add some details about multi-modal abilities if possible.]
This innovative approach not only augments the automated and precise data extraction process but also enriches the interaction between researchers and the vast expanse of scientific knowledge, paving the way for a more holistic and efficient research methodology.

**Evaluation of Uni-SMART.**
To rigorously assess the multimodal capabilities of Uni-SMART, a comparative analysis was conducted against existing heuristic literature analysis tools, which are mostly based on LLMs.
The tools included for comparison were ChatPDF, Claude, and GPT-4. 
Our evaluation focused on extensive functionalities crucial for scientific research: table information extraction, molecular formula recognition, Markush structure recognition, synonyms/IUPAC understanding, chart understanding, reaction equation recognition, multimodal understanding, multimodal reasoning, text understanding, and textual reasoning.
[Add summary of evaluation results.]

**Outlines of this report.**
In the following sections, we first provide an overview of the model architecture.
We then present detailed evaluations of the Uni-SMART.
[Briefs for more chapters if possible.]

![Uni-SMART-framework](/assets/img/Uni-SMART-framework.png)
